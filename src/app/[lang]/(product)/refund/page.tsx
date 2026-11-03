import LongPage from "@/components/product/LongPage";
import { logviaCopy } from "@/content/logvia-copy";
import { productMeta } from "../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/refund">) {
  return productMeta(params, "/refund/", "refund");
}

export default async function Page({ params }: PageProps<"/[lang]/refund">) {
  const { lang } = await params;
  const c = logviaCopy(lang);
  return (
    <LongPage
      eyebrow={c.long.legalEyebrow}
      title={c.long.refundTitle}
      html={c.refundHtml.replaceAll("{contact}", `/${lang}/#contact`).replaceAll("{refund}", `/${lang}/refund/`)}
    />
  );
}
