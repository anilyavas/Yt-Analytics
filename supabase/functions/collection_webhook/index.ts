import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

Deno.serve(async (req) => {
  const data = await req.json();
  console.log('Data: ', data);
  console.log('Headers', JSON.stringify(req.headers));

  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
