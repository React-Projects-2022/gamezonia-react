import { Outlet } from "react-router-dom";
import Footer from "./core/components/Footer";
import Navbar from "./core/components/Navbar";
const Public = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Public;
