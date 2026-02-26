import WorksSection from "@/components/WorksSection";
import { getWorks } from "@/lib/cms";

export const revalidate = 3600;

export default async function WorksPage() {
  const works = await getWorks();

  return <WorksSection works={works} displayMode="gallery" />;
}
