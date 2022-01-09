export function getStrapiURL(path = "", isApi: boolean = false) {
  return `${ process.env.NEXT_PUBLIC_STRAPI_API_URL }${isApi ? '/api' : ''}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path, true);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export function getStrapiMedia(mediaUrl: string) {
  return mediaUrl.startsWith("/")
    ? getStrapiURL(mediaUrl)
    : mediaUrl;
}

export async function fetchNovaPoschtaApi(body: any): Promise<any> {
  const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    body: JSON.stringify({
      apiKey: process.env.NOVA_POSCHTA_API_KEY,
      ...body,
    }),
  });

  const responseData = await response.json();

  return responseData;
}
