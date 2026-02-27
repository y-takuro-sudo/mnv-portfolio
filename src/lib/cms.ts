import type { Work, MicroCMSWork, MicroCMSListResponse } from "./types";

export type { Work } from "./types";

const MICROCMS_SERVICE_DOMAIN = "myptlfo";
const MICROCMS_ENDPOINT = "takuro";

const BASE_URL = `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${MICROCMS_ENDPOINT}`;

function getApiKey(): string {
  return process.env.MICROCMS_API_KEY || "";
}

function toWork(item: MicroCMSWork): Work {
  return {
    id: item.id,
    title: item.title,
    thumbnail: item.eyecatch?.url,
    url: item.url,
    publishedAt: item.publishedAt,
  };
}

export async function getWorks(): Promise<Work[]> {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("MICROCMS_API_KEY is not set");
    return [];
  }

  try {
    const res = await fetch(`${BASE_URL}?limit=100`, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`MicroCMS fetch error: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: MicroCMSListResponse<MicroCMSWork> = await res.json();
    return data.contents.map(toWork);
  } catch (error) {
    console.error("MicroCMS fetch error:", error);
    return [];
  }
}

export async function getWork(id: string): Promise<Work | null> {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("MICROCMS_API_KEY is not set");
    return null;
  }

  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data: MicroCMSWork = await res.json();
    return toWork(data);
  } catch (error) {
    console.error(`MicroCMS fetch error (work ${id}):`, error);
    return null;
  }
}
