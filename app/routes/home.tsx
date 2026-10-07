import Featured from "~/pages/home/Featured";
import type { Route } from "./+types/home";
import Layout from "~/layout/Layout";
import Popular from "~/pages/home/Popular";
import Banner from "~/pages/home/Banner";
import AllProducts from "~/pages/home/AllProducts";
import CategoryShowcase from "~/pages/home/CategoryShowcase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radiance-আভা" },
    {
      name: "description",
      content:
        " Welcome to Radiance-আভা! where creativity meets craftsmanship.",
    },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Banner />
      <CategoryShowcase />
      <Featured />
      <Popular />
      <AllProducts />
    </Layout>
  );
}
