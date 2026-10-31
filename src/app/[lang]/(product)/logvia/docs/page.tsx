import LongPage from "@/components/product/LongPage";
import { docsHtml, docsToc } from "@/content/logvia-pages";
import { productMeta } from "../../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia/docs">) {
  return productMeta(params, "/logvia/docs/", "Logvia documentation", "How to install and set up Logvia: account page, popup, menu items, shortcodes, form builder, Google sign-in, captcha, WooCommerce options and developer hooks.");
}

export default async function Page({ params }: PageProps<"/[lang]/logvia/docs">) {
  const { lang } = await params;
  return (
    <LongPage
      eyebrow="Logvia · Documentation"
      title="Set up Logvia."
      lead="Everything you need to set up Logvia on your store. Most sites are ready after the first three steps."
      html={docsHtml.replaceAll("{contact}", `/${lang}/#contact`)}
      toc={docsToc}
    />
  );
}
