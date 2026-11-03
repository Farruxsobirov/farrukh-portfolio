import LongPage from "@/components/product/LongPage";
import { logviaCopy } from "@/content/logvia-copy";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  return productMeta(params, "/privacy/", "privacy");
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  const c = logviaCopy(lang);
  return (
    <LongPage
      eyebrow={c.long.legalEyebrow}
      title={c.long.privacyTitle}
      html={c.privacyHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
