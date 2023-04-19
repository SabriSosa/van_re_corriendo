import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as AuthService from '../services/auth'

import "./Login.scss";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../services/firestore";
import { useNavigate } from "react-router";

function Login() {
  const [waiting, setWaiting] = useState(false);
  let [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    
    const _fn =
    authMode === "signin"
        ? signInWithEmailAndPassword
        : createUserWithEmailAndPassword;


    _fn(auth, email.value, password.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (authMode === "signup"){
            NotificationManager.success("Se ha creado el usuario correctamente");
        }else{
            await AuthService.loggedIn(user);
            navigate("/new-item");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        NotificationManager.error(errorMessage);
      });
  };

  if (waiting) {
    return (
      <Container className="text-center">
        <Spinner animation="border" style={{ width: "4rem", height: "4rem" }} />
      </Container>
    );
  }

  return (
    <Container fluid className="login-container">
      <NotificationContainer />
      <Form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-title">
          {authMode === "signin" ? "Sign In" : "Sign Un"}
        </h3>
        {/* <div className="text-center">
          {authMode === "signin"
            ? "Not registered yet? "
            : "Already registered? "}

          <span className="link-primary" onClick={changeAuthMode}>
            {authMode === "signin" ? "Sign Up" : "Sign In"}
          </span>
        </div> */}
        <Form.Group className="mb-3 login-group" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3 login-group" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container className="mb-3 login-btn">
          <Button variant="primary" type="submit" className="new-item-button"  >
          {authMode === "signin"
            ? "Sign In"
            : "Sign Up"}
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default Login;
