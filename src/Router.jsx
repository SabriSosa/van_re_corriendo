import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProjectForm from "./pages/Project";
import TravelRoute from "./pages/TravelRoute";
import HelpUs from "./pages/HelpUs";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/project" element={<ProjectForm />} />
      <Route path="/route" element={<TravelRoute/>} />
      <Route path="/help-us" element={<HelpUs/>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default Router;
