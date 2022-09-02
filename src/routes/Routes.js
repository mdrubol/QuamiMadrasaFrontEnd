import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/loader/Loader";
import DashboardLayout from "../layout/DashboardLayout";
import Layout from "../layout/Layout";
import NotFoundLayout from "../layout/NotFoundLayout";
import Login from "../pages/public/login/Login";
import NotFound from "../pages/public/NotFound";

const Home = React.lazy(() => import("../pages/public/home/Home"));
const Contact = React.lazy(() => import("../pages/public/contact/Contact"));
const Dashboard = React.lazy(() =>
  import("../pages/secure/dashboard/Dashboard")
);
const Data = React.lazy(() => import("../pages/secure/data/Data"));
const Table = React.lazy(() => import("../pages/secure/table/Table"));

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<Loader />}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<Loader />}>
              <Login />
            </React.Suspense>
          }
        />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="data"
          element={
            <React.Suspense fallback={<Loader />}>
              <Data />
            </React.Suspense>
          }
        />
        <Route
          path="table"
          element={
            <React.Suspense fallback={<Loader />}>
              <Table />
            </React.Suspense>
          }
        />
      </Route>

      <Route element={<NotFoundLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ClientsRoutes;
