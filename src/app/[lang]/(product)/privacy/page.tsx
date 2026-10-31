import LongPage from "@/components/product/LongPage";
import { privacyHtml } from "@/content/logvia-pages";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  return productMeta(params, "/privacy/", "Privacy policy", "What data is collected, why, and how to ask for it to be deleted.");
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  return (
    <LongPage
      eyebrow="Legal · Last updated 31 October 2026"
      title="Privacy."
      html={privacyHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
