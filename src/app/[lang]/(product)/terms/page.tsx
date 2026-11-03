import LongPage from "@/components/product/LongPage";
import { logviaCopy } from "@/content/logvia-copy";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  return productMeta(params, "/terms/", "terms");
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  const c = logviaCopy(lang);
  return (
    <LongPage
      eyebrow={c.long.legalEyebrow}
      title={c.long.termsTitle}
      html={c.termsHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
