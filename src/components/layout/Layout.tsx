import Header from "./Header";
import Footer from "./Footer";
import campBackground from "@/assets/camp-background.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed subtle background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: `url(${campBackground})` }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
