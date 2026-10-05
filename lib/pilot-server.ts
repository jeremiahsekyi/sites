import { getPilotDb, type PilotDatabase } from "../db";
import { registrationSchema, PILOT_BOOKING_URL, type RegistrationRow } from "./pilot";
export interface PilotEnv { DB?:PilotDatabase; PILOT_ADMIN_EMAILS?:string; PILOT_ORIGIN?:string; }
const noCache={"Cache-Control":"private, no-store", "X-Robots-Tag":"noindex, nofollow"};
const json=(body:unknown,status=200)=>Response.json(body,{status,headers:noCache});
export function isPilotAdmin(request:Request,env:PilotEnv){
 const email=request.headers.get("oai-authenticated-user-email")?.toLowerCase().trim();
 const allowed=(env.PILOT_ADMIN_EMAILS||"").split(",").map(s=>s.trim().toLowerCase()).filter(Boolean);
 return !!email && allowed.includes(email);
}
function csvCell(value:unknown){let s=String(value??"");if(/^[\s]*[=+@-]/.test(s)||/^[\t\r\n]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function registrationCsv(rows:RegistrationRow[]){
 const fields:[string,keyof RegistrationRow][]=[["Registration ID","id"],["Submitted (UTC)","created_at"],["Full name","name"],["Email","email"],["Phone / WhatsApp","contact"],["Preferred contact","contact_method"],["Nationality","nationality"],["Time zone","timezone"],["Coaching needs","needs"],["Goals","goals"],["January availability","january"],["Support before January","urgency"],["Immediate needs","immediate_needs"],["Deadline","deadline"],["Immediate details","immediate_details"],["Contact consent version","consent_version"],["Programme updates opt-in","updates"]];
 return '\uFEFF'+[fields.map(([label])=>csvCell(label)).join(','),...rows.map(row=>fields.map(([,key])=>csvCell(key==='needs'||key==='immediate_needs'?JSON.parse(row[key]).join('; '):key==='updates'?row.updates?'Yes':'No':row[key])).join(','))].join('\r\n');
}
async function hash(value:string){const bytes=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));return Array.from(new Uint8Array(bytes),v=>v.toString(16).padStart(2,"0")).join("");}
export async function handlePilotRequest(request:Request,env:PilotEnv):Promise<Response|null>{
 const url=new URL(request.url);if(!url.pathname.startsWith('/api/pilot/'))return null;
 try{
  if(url.pathname==='/api/pilot/registrations'){
   if(request.method!=='GET')return json({error:'Method not allowed'},405);
   if(!isPilotAdmin(request,env))return json({error:'This register is only available to the authorised Speech Factory team.'},403);
   const db=getPilotDb(env);const rows=(await db.prepare('SELECT id, created_at, name, email, contact, contact_method, nationality, timezone, needs, goals, january, urgency, immediate_needs, deadline, immediate_details, consent_version, updates FROM pilot_registrations ORDER BY created_at DESC LIMIT 10001').all<RegistrationRow>()).results;
   if(rows.length>10000)return json({error:'The register is too large for a single export. Please contact the site administrator.'},413);
   if(url.searchParams.get('format')==='csv')return new Response(registrationCsv(rows),{headers:{...noCache,'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename="TSF-January-2027-registrations.csv"'}});
   return json({registrations:rows});
  }
  if(url.pathname!=='/api/pilot/register')return json({error:'Not found'},404);
  if(request.method!=='POST')return json({error:'Method not allowed'},405);
  if(!env.PILOT_ORIGIN || !env.PILOT_ORIGIN.split(',').includes(request.headers.get('origin')||''))return json({error:'Please submit the form from this website.'},403);
  if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'Unsupported request format'},415);
  if(Number(request.headers.get('content-length')||0)>18000)return json({error:'Please shorten your responses.'},413);
  const body=await request.text();if(body.length>18000)return json({error:'Please shorten your responses.'},413);
  let input;try{input=JSON.parse(body);}catch{return json({error:'Please check the form and try again.'},400);}
  const parsed=registrationSchema.safeParse(input);if(!parsed.success)return json({error:'Please check the highlighted details.',fields:parsed.error.flatten().fieldErrors},400);
  const data=parsed.data;if(data.website)return json({error:'Unable to submit this form. Please contact our team.'},400);
  const db=getPilotDb(env);
  const existing=await db.prepare('SELECT id FROM pilot_registrations WHERE request_id = ?').bind(data.requestId).first<{id:string}>();
  if(existing)return json({saved:true,reference:existing.id,bookingUrl:PILOT_BOOKING_URL});
  const key=await hash('pilot:'+ (request.headers.get('cf-connecting-ip')||'unknown')+':'+data.email.toLowerCase());const window=Math.floor(Date.now()/3600000);
  const rate=await db.prepare('INSERT INTO pilot_rate_limits (key, window, count) VALUES (?, ?, 1) ON CONFLICT(key) DO UPDATE SET count = CASE WHEN pilot_rate_limits.window = excluded.window THEN pilot_rate_limits.count + 1 ELSE 1 END, window = excluded.window RETURNING count').bind(key,window).first<{count:number}>();
  if(rate && rate.count>8)return json({error:'Too many attempts. Please try again in an hour or contact our team.'},429);
  const id=crypto.randomUUID();const now=new Date().toISOString();
  await db.prepare('INSERT INTO pilot_registrations (id, request_id, created_at, name, email, contact, contact_method, nationality, timezone, needs, goals, january, urgency, immediate_needs, deadline, immediate_details, consent_version, updates) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(request_id) DO NOTHING').bind(id,data.requestId,now,data.name,data.email,data.contact,data.contactMethod,data.nationality,data.timezone,JSON.stringify([...new Set(data.needs)]),data.goals,data.january,data.urgency,JSON.stringify(data.immediateNeeds),data.deadline,data.immediateDetails,'pilot-2027-contact-v1',data.updates?1:0).run();
  const saved=await db.prepare('SELECT id FROM pilot_registrations WHERE request_id = ?').bind(data.requestId).first<{id:string}>();
  if(!saved)throw new Error('Save verification failed');
  return json({saved:true,reference:saved.id,bookingUrl:PILOT_BOOKING_URL},201);
 }catch(error){console.error('Pilot request failed',error instanceof Error?error.message:'Unknown error');return json({error:'We could not save your registration just now. Your details are still in the form. Please try again.'},503);}
}
