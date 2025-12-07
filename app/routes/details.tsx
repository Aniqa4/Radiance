import Layout from "~/layout/Layout";
import type { Route } from "./+types/details";
import { useParams } from "react-router";
import ProductDetails from "~/pages/details/ProductDetails";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radiance-আভা - Product details" },
    { name: "description", content: "Get your miniature trophy!" },
  ];
}

function details() {
  const { id } = useParams();

  return (
    <Layout>
      <ProductDetails />
    </Layout>
  );
}

export default details;
