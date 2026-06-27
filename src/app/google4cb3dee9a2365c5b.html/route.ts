export function GET() {
  return new Response(
    "google-site-verification: google4cb3dee9a2365c5b.html",
    { headers: { "Content-Type": "text/html" } },
  );
}
