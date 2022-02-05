import qs from 'qs';
import { toProductsListResponse } from './formatter';

export function getStrapiURL(path = "", isApi: boolean = false) {
  return `${ process.env.NEXT_PUBLIC_STRAPI_API_URL }${isApi ? '/api' : ''}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, options?: RequestInit) {
  const requestUrl = getStrapiURL(path, true);
  const response = await fetch(requestUrl, options);
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

export async function getFirstListItemPrice(...sorting: Array<string>): Promise<number | undefined> {
  const priceQueryObj = {
    pagination: {
      page: 1,
      pageSize: 1,
    },
    populate: '*',
  };

  const priceQuery = qs.stringify({
    ...priceQueryObj,
    sort: [sorting],
  });

  const priceUrl = `/products?${priceQuery}`;
  const priceResponse = await fetchAPI(priceUrl);
  const priceProducts = toProductsListResponse(priceResponse);
  const price = priceProducts.products.data[0].price;

  return price;
}
