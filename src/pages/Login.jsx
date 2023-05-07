import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router";
import CustomSpinner from "../components/generic/CustomSpinner";
import * as AuthService from "../services/AuthService";
import "./Login.scss";

function Login() {
  const [waiting, setWaiting] = useState(false);
  let [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode == "signin" ? "signup" : "signin");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    const _fn =
      authMode == "signin"
        ? signInWithEmailAndPassword
        : createUserWithEmailAndPassword;

    _fn(AuthService, email.value, password.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (authMode == "signup") {
          NotificationManager.success("Se ha creado el usuario correctamente");
        } else {
          await AuthService.loggedIn(user);
          navigate("/new-item");
          setWaiting(false);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        NotificationManager.error(errorMessage);
      });
  };

  if (waiting) {
    return <CustomSpinner />;
  }

  return (
    <Container fluid className="login-container">
      <NotificationContainer />
      <Form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-title">
          {authMode == "signin" ? "Sign In" : "Sign Un"}
        </h3>
        {/* <div className="text-center">
          {authMode == "signin"
            ? "Not registered yet? "
            : "Already registered? "}

          <span className="link-primary" onClick={changeAuthMode}>
            {authMode == "signin" ? "Sign Up" : "Sign In"}
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
          <Button variant="primary" type="submit" className="new-item-button">
            {authMode == "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default Login;
