import React from "react";
import { getFirestore } from "firebase/firestore";

import { FirestoreProvider, useFirebaseApp } from "reactfire";
import NavBarMenu from "./components/NavBar";
import "./App.scss";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <React.StrictMode>
      <BrowserRouter>
        <FirestoreProvider sdk={firestoreInstance}>
          <NavBarMenu />
          <Router />
          <Footer />
        </FirestoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
