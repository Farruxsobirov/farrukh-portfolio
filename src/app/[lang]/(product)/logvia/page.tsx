import LogviaPage from "@/components/product/LogviaPage";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia">) {
  return productMeta(
    params,
    "/logvia/",
    "Logvia: login, registration and Google sign-in for WooCommerce",
    "Replace the WooCommerce login with a popup, email-verified registration, a drag and drop form builder and Google sign-in. Free on WordPress.org, with Logvia Pro for growing stores.",
  );
}

export default function Page() {
  return <LogviaPage />;
}
