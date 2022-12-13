import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full text-sky-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
