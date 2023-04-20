import { getFirestore } from "firebase/firestore";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./Router";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";

function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
          <NavBarMenu />
          <Router />
          <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
