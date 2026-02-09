import WorksSection from "@/components/WorksSection";
import { getWorks, getProjectSettings } from "@/lib/cms";

export const revalidate = 3600;

export default async function WorksPage() {
  const [works, project] = await Promise.all([
    getWorks(),
    getProjectSettings(),
  ]);

  const displayMode = project?.displayMode ?? "list";

  return <WorksSection works={works} displayMode={displayMode} />;
}
