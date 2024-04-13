import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup.js";
import { useUser } from "./useUser.js";
import { useLogin } from "./useLogin.js";
import Spinner from "../../ui/Spinner.jsx";
import { useInfoUser } from "../../context/userContext.jsx";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  // const { login, isLoading: loginingIn } = useLogin();
  const {
    email: registeredEmail,
    password: registeredPassword,
    dispatch,
  } = useInfoUser();

  const { user, isAuthenticated } = useUser();
  // console.log("user:", user);
  // console.log("isAuthenticated", isAuthenticated);

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          dispatch({
            type: "userRegistered",
            payload: {
              fullName: getValues().fullName,
              email: getValues().email,
              password: getValues().password,
            },
          });

          navigate("/login");
        },

        onSettled: () => reset,
      }
    );
  }

  // if (loginingIn) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={() => {
            reset();
            navigate("/login");
          }}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
