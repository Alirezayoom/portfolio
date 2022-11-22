import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full  bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
