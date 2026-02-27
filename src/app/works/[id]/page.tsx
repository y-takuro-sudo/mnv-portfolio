import { notFound } from "next/navigation";
import { getWork } from "@/lib/cms";
import WorkDetail from "./WorkDetail";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = await getWork(id);

  if (!work) notFound();

  return <WorkDetail work={work} />;
}
