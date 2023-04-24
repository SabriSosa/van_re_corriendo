import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/Contact";
import HelpUs from "./pages/HelpUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import ProjectForm from "./pages/Project";
import TravelRoute from "./pages/TravelRoute";
import * as AuthService from "./services/auth";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const isLoggedIn = AuthService.isLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/home/:postId" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/project" element={<ProjectForm />} />
      <Route path="/route" element={<TravelRoute />} />
      <Route path="/help-us" element={<HelpUs />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/new-item"
        element={
          <ProtectedRoute>
            <NewItem />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default Router;
