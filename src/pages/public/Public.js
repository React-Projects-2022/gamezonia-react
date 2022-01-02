import { Outlet } from "react-router-dom";
import Navbar from "./core/components/Navbar";

const Public = () => (
  <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
    
  </>
);

export default Public;
