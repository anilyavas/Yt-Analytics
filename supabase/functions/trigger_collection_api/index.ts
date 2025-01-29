import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

console.log('Hello from Functions!');

//https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lk538t2k2p1k3oos71&endpoint=https://fetezusfowkehtdpfipi.supabase.co/functions/v1/collection_webhook&format=json&uncompressed_webhook=true&include_errors=true

Deno.serve(async (req: any) => {
  const { url } = await req.json();

  console.log(url);

  const response = await fetch(
    `https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lk538t2k2p1k3oos71&endpoint=${Deno.env.get('SUPABASE_URL')}/functions/v1/collection_webhook&format=json&uncompressed_webhook=true&include_errors=true`,
    {
      headers: {
        Authorization: `Bearer ${Deno.env.get('BRIGHT_DATA_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify([{ url }]),
    }
  );

  if (!response.ok) {
    console.log('response: ', response);
    return new Response(JSON.stringify({ error: 'Failed to trigger collection' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const data = await response.json();
  console.log('response: ', response);

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
});
