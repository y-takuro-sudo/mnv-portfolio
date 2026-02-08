import Parser from "rss-parser";

export interface NoteArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

export async function getNoteArticles(): Promise<NoteArticle[]> {
  const parser = new Parser();
  const rssUrl =
    process.env.NOTE_RSS_URL || "https://note.com/tak_yoshiro0525/rss";

  try {
    const feed = await parser.parseURL(rssUrl);
    return (feed.items || []).slice(0, 6).map((item) => ({
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      contentSnippet: item.contentSnippet?.slice(0, 100),
    }));
  } catch (error) {
    console.error("Note RSS fetch error:", error);
    return [];
  }
}
