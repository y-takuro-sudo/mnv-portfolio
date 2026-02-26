import Parser from "rss-parser";

export interface NoteArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  thumbnail?: string;
}

type CustomItem = {
  "media:thumbnail"?: { $?: { url?: string } } | string;
};

export async function getNoteArticles(): Promise<NoteArticle[]> {
  const parser = new Parser<Record<string, unknown>, CustomItem>({
    customFields: {
      item: ["media:thumbnail"],
    },
  });
  const rssUrl =
    process.env.NOTE_RSS_URL || "https://note.com/tak_yoshiro0525/rss";

  try {
    const feed = await parser.parseURL(rssUrl);
    return (feed.items || []).map((item) => {
      const mediaThumbnail = item["media:thumbnail"];
      let thumbnail: string | undefined;
      if (typeof mediaThumbnail === "string") {
        thumbnail = mediaThumbnail;
      } else if (mediaThumbnail && typeof mediaThumbnail === "object") {
        thumbnail = mediaThumbnail.$?.url;
      }

      return {
        title: item.title || "Untitled",
        link: item.link || "#",
        pubDate: item.pubDate || "",
        contentSnippet: item.contentSnippet?.slice(0, 100),
        thumbnail,
      };
    });
  } catch (error) {
    console.error("Note RSS fetch error:", error);
    return [];
  }
}
