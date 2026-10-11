export const dynamic = "force-dynamic";
const upstream = "https://the-speech-factory.sekyijeremy.chatgpt.site";
const origins = new Set(["https://thespeechfactory.org", "https://www.thespeechfactory.org"]);
const headers = {"Cache-Control":"private, no-store", "X-Robots-Tag":"noindex, nofollow"};
async function forward(request: Request, context: {params: Promise<{action:string}>}) {
 const {action} = await context.params;
 const allowed = request.method === "GET" ? ["access","content"] : ["join","preferences","unsubscribe"];
 if (!allowed.includes(action)) return Response.json({error:"Not found"},{status:404,headers});
 const origin = request.headers.get("origin") || "";
 if (request.method === "POST" && !origins.has(origin)) return Response.json({error:"Please use the form on this website."},{status:403,headers});
 try {
  const outgoing = new Headers();
  const cookie = request.headers.get("cookie")?.match(/(?:^|;\s*)tsf_resource_access=([^;]+)/)?.[1];
  if(cookie && cookie.length<200) outgoing.set("Cookie",`tsf_resource_access=${cookie}`);
  let body: string | undefined;
  if (request.method === "POST") {
   if (!request.headers.get("content-type")?.includes("application/json") && action !== "unsubscribe") return Response.json({error:"Unsupported request format."},{status:415,headers});
   if (Number(request.headers.get("content-length")||0)>4000) return Response.json({error:"Please shorten your details."},{status:413,headers});
   body=await request.text();
   if(body.length>4000) return Response.json({error:"Please shorten your details."},{status:413,headers});
   outgoing.set("Content-Type","application/json");outgoing.set("Origin",origin);
  }
  const result=await fetch(`${upstream}/api/resources/${action}`,{method:request.method,headers:outgoing,body,cache:"no-store",signal:AbortSignal.timeout(15000),redirect:"error"});
  const responseHeaders=new Headers({...headers,"Content-Type":"application/json"});
  const savedCookie=result.headers.get("set-cookie");if(savedCookie)responseHeaders.set("Set-Cookie",savedCookie);
  return new Response(await result.text(),{status:result.status,headers:responseHeaders});
 }catch{return Response.json({error:"We could not open your practice space just now. Please try again."},{status:503,headers});}
}
export const GET=forward;
export const POST=forward;
