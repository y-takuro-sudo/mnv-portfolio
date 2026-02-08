import NewsSection from "@/components/NewsSection";
import { getNoteArticles } from "@/lib/note";

export const revalidate = 3600;

export default async function NewsPage() {
  const articles = await getNoteArticles();

  return <NewsSection articles={articles} />;
}
