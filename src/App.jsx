import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";
import Router from "./Router";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBarMenu />
        <Container fluid className="main-container">
          <Router />
        </Container>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
