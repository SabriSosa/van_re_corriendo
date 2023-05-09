import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomSpinner from "./components/generic/CustomSpinner";
import * as AuthService from "./services/AuthService";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AddEditPost = lazy(() => import("./pages/AddEditPost"));
const ContactForm = lazy(() => import("./pages/Contact"));
const ListPosts = lazy(() => import("./pages/ListPosts"));
const ListRoutes = lazy(() => import("./pages/ListRoutes"));
const HelpUs = lazy(() => import("./pages/HelpUs"));
const Login = lazy(() => import("./pages/Login"));
const NewItem = lazy(() => import("./pages/NewItem"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectForm = lazy(() => import("./pages/Project"));
const TravelRoute = lazy(() => import("./pages/TravelRoute"));

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const isLoggedIn = AuthService.isLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function Router() {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Routes>
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
        <Route path="/add-post/" element={<AddEditPost />} />
        <Route path="/edit-post/:id" element={<AddEditPost />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route
          path="/new-item"
          element={
            <ProtectedRoute>
              <NewItem />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
