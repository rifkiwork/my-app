import { Footer } from "@/components/ui/footer/footer";
import { Navbar } from "@/components/ui/nav/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="pt-[80px] min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
