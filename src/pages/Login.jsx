import styled, { css } from "styled-components";
import LoginForm from "../features/authentication/LoginForm.jsx";
import Logo from "../ui/Logo.jsx";
import Heading from "../ui/Heading.jsx";
import SignupForm from "../features/authentication/SignupForm.jsx";
import { useState } from "react";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  ${(props) =>
    props.type === "register" &&
    css`
      grid-template-columns: 80rem;
    `}
`;

function Login() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  return (
    <>
      <LoginLayout type={isLoginOpen ? "login" : "register"}>
        <Logo />
        <Heading as="h4">
          {isLoginOpen ? "Log in to your account" : "Create your account"}
        </Heading>

        <LoginForm isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
        <SignupForm isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      </LoginLayout>
    </>
  );
}

export default Login;
