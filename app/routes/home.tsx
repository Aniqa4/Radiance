import Featured from "~/pages/home/Featured";
import type { Route } from "./+types/home";
import Layout from "~/layout/Layout";
import Popular from "~/pages/home/Popular";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FellasFav" },
    { name: "description", content: "Get your miniature trophy!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Popular />
      <Featured />
    </Layout>
  );
}
