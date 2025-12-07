import { useParams } from "react-router";
import type { Route } from "./+types/categories";
import Layout from "~/layout/Layout";
import Categories from "~/pages/categories/Categories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FellasFav - Category" },
    { name: "description", content: "Get your miniature trophy!" },
  ];
}

function categories() {
  const { id, categoryName } = useParams();
  return (
    <Layout>
      <Categories categoryID={Number(id)} categoryName={categoryName}/>
    </Layout>
  );
}

export default categories;
