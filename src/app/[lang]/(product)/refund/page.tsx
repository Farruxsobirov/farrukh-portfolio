import LongPage from "@/components/product/LongPage";
import { refundHtml } from "@/content/logvia-pages";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/refund">) {
  return productMeta(params, "/refund/", "Refund policy", "A 14-day money-back guarantee on paid plugin licences.");
}

export default async function Page({ params }: PageProps<"/[lang]/refund">) {
  const { lang } = await params;
  return (
    <LongPage
      eyebrow="Legal · Last updated 31 October 2026"
      title="Refunds."
      html={refundHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
