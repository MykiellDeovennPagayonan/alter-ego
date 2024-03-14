import { api } from "~/trpc/server";

export default async function Home() {
  const burger = await api.burg.get.bestestFood.query()

  return <div>{burger}</div>;
}