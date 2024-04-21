import SignupForm from "../features/authentication/SignupForm.jsx";
import styled from "styled-components";
import Logo from "../ui/Logo.jsx";
import Heading from "../ui/Heading.jsx";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 80rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 768px) {
    grid-template-columns: 0.85fr;
  }

  @media (max-width: 576px) {
    /* grid-template-columns: 0.9fr; */
  }
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

function Register() {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Create your account</Heading>
      <SignupForm />
    </RegisterLayout>
  );
}

export default Register;
