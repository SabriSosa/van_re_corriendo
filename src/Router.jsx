import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { AddEdit } from "./pages/AddEdit";
import ContactForm from "./pages/Contact";
import EditPost from "./pages/ListPosts";
import HelpUs from "./pages/HelpUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import NotFound from "./pages/NotFound";
import ProjectForm from "./pages/Project";
import TravelRoute from "./pages/TravelRoute";
import * as AuthService from "./services/auth";
import ListPosts from "./pages/ListPosts";
import ListRoutes from "./pages/ListRoutes";

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
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:postId" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/project" element={<ProjectForm />} />
      <Route path="/route" element={<TravelRoute />} />
      <Route path="/help-us" element={<HelpUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list-posts" element={<ListPosts />} />
      <Route path="/list-routes" element={<ListRoutes />} />
      <Route path="/add-edit/" element={<AddEdit />} />
      <Route path="/add-edit/:postId" element={<AddEdit />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route
        path="/new-item"
        element={
          <ProtectedRoute>
            <NewItem />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default Router;
