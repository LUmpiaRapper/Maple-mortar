import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PromotionBanner from "@/components/promotion-banner";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromotionBanner />
      <Nav />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
