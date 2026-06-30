import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
