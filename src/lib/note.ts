export interface NoteArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  thumbnail?: string;
}

export async function getNoteArticles(): Promise<NoteArticle[]> {
  const rssUrl =
    process.env.NOTE_RSS_URL || "https://note.com/tak_yoshiro0525/rss";

  try {
    const res = await fetch(rssUrl);
    if (!res.ok) {
      console.error(`Note RSS fetch error: ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const items: NoteArticle[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1];

      const title = extractTag(itemXml, "title") || "Untitled";
      const link = extractTag(itemXml, "link") || "#";
      const pubDate = extractTag(itemXml, "pubDate") || "";
      const description = extractTag(itemXml, "description") || "";
      const contentSnippet = stripHtml(description).slice(0, 100);

      const thumbnailMatch = itemXml.match(
        /<media:thumbnail[^>]*url=["']([^"']*)["']/
      );
      const thumbnail = thumbnailMatch?.[1];

      items.push({ title, link, pubDate, contentSnippet, thumbnail });
    }

    return items;
  } catch (error) {
    console.error("Note RSS fetch error:", error);
    return [];
  }
}

function extractTag(xml: string, tag: string): string | undefined {
  const cdataRegex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const match = xml.match(regex);
  return match?.[1]?.trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
