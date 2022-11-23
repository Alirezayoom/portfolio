import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-bl from-[#232323] to-[#111] text-slate-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
