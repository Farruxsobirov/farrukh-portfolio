import LongPage from "@/components/product/LongPage";
import { logviaCopy } from "@/content/logvia-copy";
import { productMeta } from "../../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia/docs">) {
  return productMeta(params, "/logvia/docs/", "docs");
}

export default async function Page({ params }: PageProps<"/[lang]/logvia/docs">) {
  const { lang } = await params;
  const c = logviaCopy(lang);
  return (
    <LongPage
      eyebrow={c.long.docsEyebrow}
      title={c.long.docsTitle}
      lead={c.long.docsLead}
      html={c.docsHtml.replaceAll("{contact}", `/${lang}/#contact`)}
      toc={c.docsToc}
      onThisPage={c.long.onThisPage}
    />
  );
}
