// Vercel bridge to the production registration store. Sites handles this path
// directly in its Worker; only the public form endpoint is forwarded here.
export const dynamic = "force-dynamic";
const origins = new Set(["https://thespeechfactory.org", "https://www.thespeechfactory.org"]);
const headers = {"Cache-Control":"no-store", "X-Robots-Tag":"noindex, nofollow"};
export async function POST(request: Request) {
 const origin = request.headers.get("origin") || "";
 if (!origins.has(origin)) return Response.json({error:"Please submit the form from this website."},{status:403,headers});
 if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({error:"Unsupported request format"},{status:415,headers});
 if (Number(request.headers.get("content-length")||0)>18000) return Response.json({error:"Please shorten your responses."},{status:413,headers});
 try {
  const body = await request.text();
  if(body.length>18000) return Response.json({error:"Please shorten your responses."},{status:413,headers});
  const result = await fetch("https://the-speech-factory.sekyijeremy.chatgpt.site/api/pilot/register", {method:"POST",headers:{"Content-Type":"application/json",Origin:origin},body,cache:"no-store",signal:AbortSignal.timeout(15000),redirect:"error"});
  return new Response(await result.text(),{status:result.status,headers:{...headers,"Content-Type":"application/json"}});
 } catch {
  return Response.json({error:"We could not save your registration just now. Your details are still in the form. Please try again."},{status:503,headers});
 }
}
