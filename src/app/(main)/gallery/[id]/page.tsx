import { ANIMALS, type AnimalId } from "@/data/animals";
import { AnimalDetailClient } from "./AnimalDetailClient";

export function generateStaticParams() {
  return ANIMALS.map((a) => ({ id: a.id }));
}

export const dynamicParams = false;

export default async function AnimalDetailPage({
  params,
}: {
  params: Promise<{ id: AnimalId }>;
}) {
  const { id } = await params;
  return <AnimalDetailClient id={id} />;
}
