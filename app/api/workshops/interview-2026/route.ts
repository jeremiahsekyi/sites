const endpoint = "https://the-speech-factory.sekyijeremy.chatgpt.site/api/workshops/interview-2026";
const origins = new Set(["https://thespeechfactory.org", "https://www.thespeechfactory.org"]);
const headers = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const origin = request.headers.get("origin") ?? "";
  if (!origins.has(origin)) return new Response(null, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/json")) return new Response(null, { status: 415 });
  if (Number(request.headers.get("content-length")) > 8192) return new Response(null, { status: 413 });
  try {
    const body = await request.text();
    if (body.length > 8192) return new Response(null, { status: 413 });
    const result = await fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "application/json", Origin: origin },
      body, cache: "no-store", redirect: "error", signal: AbortSignal.timeout(15000),
    });
    if (!result.ok) return new Response(null, { status: result.status, headers });
    if ((await result.json()).saved === true) return Response.json({ saved: true }, { headers });
  } catch {
    // Keep the visitor on the form if storage is unavailable.
  }
  return new Response(null, { status: 503, headers });
}
