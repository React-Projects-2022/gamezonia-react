import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Public from "./Public";
import Admin from "./Admin";
import NotFound from "./NotFound";
import Button from "react-bootstrap/Button";
import Home from "./pages/public/Home";
import Details from "./pages/public/Details";
const Router = () => (
  <>
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        <Button variant="primary">Home</Button>
      </Link>
      <Link to="/admin" style={{ padding: 5 }}>
        <Button variant="primary">Admin</Button>
      </Link>
      <Link to="/notfound" style={{ padding: 5 }}>
        <Button variant="primary">Not found</Button>
      </Link>
    </nav>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Public />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </>
);

export default Router;
