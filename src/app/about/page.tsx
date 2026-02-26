import About from "@/components/About";
import { getNoteArticles } from "@/lib/note";
import { getWorks } from "@/lib/cms";

export const revalidate = 3600;

export default async function AboutPage() {
  const [articles, works] = await Promise.all([
    getNoteArticles(),
    getWorks(),
  ]);

  return <About articles={articles} works={works} />;
}
