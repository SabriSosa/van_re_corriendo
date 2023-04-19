import { getFirestore } from "firebase/firestore";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import "./App.scss";
import Router from "./Router";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";

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
