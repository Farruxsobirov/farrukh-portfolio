import LongPage from "@/components/product/LongPage";
import { termsHtml } from "@/content/logvia-pages";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  return productMeta(params, "/terms/", "Terms of service", "The terms for buying and using Farrukh Sobirov's WordPress plugins.");
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  return (
    <LongPage
      eyebrow="Legal · Last updated 31 October 2026"
      title="Terms."
      html={termsHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
