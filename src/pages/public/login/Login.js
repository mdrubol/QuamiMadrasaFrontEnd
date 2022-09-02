import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../login/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container py-3">
      <Card className="login-panel">
        <div className="login-image">
          <i className="bi bi-shield-lock"></i>
        </div>
        <Card.Body className="py-4">
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="username">
                <i className="bi bi-person"></i>
              </InputGroup.Text>
              <Form.Control name="username" placeholder="Username" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="password">
                <i className="bi bi-lock"></i>
              </InputGroup.Text>
              <Form.Control name="password" placeholder="Password" />
            </InputGroup>
          </Form>
          <div className="">
            <Button variant="primary">
              <i className="bi bi-patch-check"></i> Login
            </Button>
            <span className="mx-2 link">Forgot password?</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
