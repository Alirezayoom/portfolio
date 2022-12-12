import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-bl  text-sky-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
