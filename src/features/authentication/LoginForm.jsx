import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import Row from "../../ui/Row.jsx";
import { useInfoUser } from "../../context/userContext.jsx";

function LoginForm() {
  const { email: registeredEmail, password: registeredPassword } =
    useInfoUser();
  console.log(registeredEmail, registeredPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
        onError: (error) => {
          console.error("Login error:", error);
          toast.error("The provided email or password is incorrect.");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={registeredEmail === "" ? email : registeredEmail}
          // onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={registeredPassword === "" ? password : registeredPassword}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Row type="horizontal">
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Log in" : <SpinnerMini />}
          </Button>
          <Button
            size="medium"
            variation="neutral"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            {!isLoading ? "register" : <SpinnerMini />}
          </Button>
        </Row>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
