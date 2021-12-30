import { Outlet } from "react-router-dom";
import Sidebar from "./core/components/Sidebar";
import Header from "./core/components/Header";
import "./../../styles/private/admin.css";
import Title from "./core/components/Title";
import { useState } from "react";
const Layout = () => {
  const [title, setTitle] = useState("Dashboard");
  const changeTitlePage = (page) => setTitle(page);
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar changeTitle={changeTitlePage}/>
      <div id="page-content-wrapper">
        <Header />
        <div className="container-fluid">
          <Title title={title} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
