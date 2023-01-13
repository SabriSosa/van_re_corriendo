import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProjectForm from "./pages/Project";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/project" element={<ProjectForm />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default Router;
