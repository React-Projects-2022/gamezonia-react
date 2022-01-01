import React from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
// Principal layouts
const PublicLayout = loadable(() => import("./pages/public/Public"));
const AdminLayout = loadable(() => import("./pages/private/Layout"));
// Public
const Home = loadable(() => import("./pages/public/Home"));
const Details = loadable(() => import("./pages/public/Details"));
const Login = loadable(() => import("./pages/public/forms/Login"));
// Private
const Dashboard = loadable(() => import("./pages/private/pages/Dashboard"));
const Users = loadable(() => import("./pages/private/pages/Users"));
const Tags = loadable(() => import("./pages/private/pages/Tags"));
const Genres = loadable(() => import("./pages/private/pages/Genres"));
// General
const NotFound = loadable(() => import("./NotFound"));
const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<Home />} />
      <Route path="details" element={<Details />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="tags" element={<Tags />} />
      <Route path="genres" element={<Genres />} />
      <Route path="notfound" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
