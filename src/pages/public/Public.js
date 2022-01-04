import { Outlet } from "react-router-dom";
import Footer from "./core/components/Footer";
import Navbar from "./core/components/Navbar";
const Public = () => (
  <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Public;
