import ProductHeader from "@/components/product/ProductHeader";
import ProductFooter from "@/components/product/ProductFooter";
import { modeScript } from "@/components/product/mode-script";

// Shell for the product pages: Logvia, its docs and changelog, and the legal pages.
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      <div className="pp">
        <ProductHeader />
        <main id="main">{children}</main>
        <ProductFooter />
      </div>
    </>
  );
}
