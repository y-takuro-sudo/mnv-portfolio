import { notFound } from "next/navigation";
import { getWork, getWorks } from "@/lib/cms";
import WorkDetail from "./WorkDetail";

export const revalidate = 3600;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((work) => ({ id: work.id }));
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = await getWork(id);

  if (!work) notFound();

  return <WorkDetail work={work} />;
}
