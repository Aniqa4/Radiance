import Layout from "~/layout/Layout";
import type { Route } from "./+types/verifyEmail";
import VerifyEmail from "~/pages/verifyEmail/VerifyEmail";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Radiance-আভা  - Verify Email" }];
}

export default function verifyEmail() {
  return (
    <Layout>
      <VerifyEmail />
    </Layout>
  );
}
