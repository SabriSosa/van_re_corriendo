import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactForm from "./components/Contact";
import Home from "./components/Home";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default Router;
