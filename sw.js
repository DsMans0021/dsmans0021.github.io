self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('/me')) {
    event.respondWith(
      new Response(JSON.stringify({ message: 'I am a new endpoint' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
