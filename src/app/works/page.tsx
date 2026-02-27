import WorksSection from "@/components/WorksSection";
import { getWorks } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function WorksPage() {
  const works = await getWorks();

  return <WorksSection works={works} displayMode="gallery" />;
}
