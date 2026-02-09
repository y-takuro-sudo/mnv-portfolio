export type Work = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  url?: string;
  tags?: string[];
  directLink?: boolean;
  publishedAt: string;
};

export type ProjectSettings = {
  id: string;
  name: string;
  slug: string;
  description: string;
  displayMode: "list" | "gallery";
};

type CMSContent = {
  id: string;
  data: {
    title?: string;
    description?: string;
    thumbnail?: string;
    url?: string;
    tags?: string[];
    directLink?: boolean;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

type CMSListResponse = {
  contents: CMSContent[];
  totalCount: number;
  limit: number;
  offset: number;
};

const CMS_API_URL = process.env.CMS_API_URL || "http://localhost:3001";
const CMS_API_KEY = process.env.CMS_API_KEY || "";

function resolveImageUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${CMS_API_URL}${url}`;
}

function toWork(c: CMSContent): Work {
  return {
    id: c.id,
    title: c.data.title || "Untitled",
    description: c.data.description || "",
    thumbnail: resolveImageUrl(c.data.thumbnail),
    url: c.data.url || undefined,
    tags: c.data.tags,
    directLink: c.data.directLink ?? false,
    publishedAt: c.publishedAt,
  };
}

export async function getProjectSettings(): Promise<ProjectSettings | null> {
  if (!CMS_API_KEY) return null;
  try {
    const res = await fetch(`${CMS_API_URL}/api/v1/${CMS_API_KEY}/project`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    console.error("CMS fetch error: project settings");
    return null;
  }
}

export async function getWorks(): Promise<Work[]> {
  try {
    const res = await fetch(
      `${CMS_API_URL}/api/v1/${CMS_API_KEY}/contents/works?limit=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: CMSListResponse = await res.json();
    return data.contents.map(toWork);
  } catch {
    console.error("CMS fetch error: works list");
    return [];
  }
}

export async function getWork(id: string): Promise<Work | null> {
  try {
    const res = await fetch(
      `${CMS_API_URL}/api/v1/${CMS_API_KEY}/contents/works/${id}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data: CMSContent = await res.json();
    return toWork(data);
  } catch {
    console.error(`CMS fetch error: work ${id}`);
    return null;
  }
}
