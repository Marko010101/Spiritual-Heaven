import { useEffect, useState } from "react";
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
import { useUser } from "./useUser.js";
import WarningMessage from "../../ui/WarningMessage.jsx";

function LoginForm() {
  const { email: registeredEmail, password: registeredPassword } =
    useInfoUser();
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  // Update state when component mounts if context values are available
  useEffect(() => {
    if (registeredEmail) setEmail(registeredEmail);
    if (registeredPassword) setPassword(registeredPassword);
  }, [registeredEmail, registeredPassword]);

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
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email || registeredEmail}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password || registeredPassword}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <Row>
        {/* if there is registered user who have not verified email rendering this text */}
        {/* {user &&
          user.user_metadata &&
          !user.user_metadata.email_verified &&
          registeredEmail && (
            <WarningMessage>Please verify your email to log in</WarningMessage>
          )} */}
        {/* {registeredEmail && (
          <WarningMessage>Please verify your email to log in</WarningMessage>
        )} */}
      </Row>
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
            {!isLoading ? "Register" : <SpinnerMini />}
          </Button>
        </Row>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
