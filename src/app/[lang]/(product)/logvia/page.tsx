import LogviaPage from "@/components/product/LogviaPage";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia">) {
  return productMeta(params, "/logvia/", "logvia");
}

export default function Page() {
  return <LogviaPage />;
}
