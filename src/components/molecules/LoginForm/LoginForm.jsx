import React, { useState } from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Link from "../../atoms/Link/Link";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";
import { validateEmail, isPasswordValid } from "../../utils/helpers";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    email: null,
    password: null,
    message: null,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === '') {
      setIsError({
        email: true,
        password: null,
        message: "required",
      });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setIsError({
        email: true,
        password: null,
        message: "not a valid email",
      });
      return;
    }

    if (trimmedPassword === "") {
      setIsError({
        email: null,
        password: true,
        message: "required",
      });
      return;
    }

    if (isPasswordValid(trimmedPassword)) {
      navigate("/dashboard/overview");
      return;
    }

    setIsError({
      email: null,
      password: true,
      message: "must contain a number, letter and min. of 8 characters",
    });
  };

  return (
    <div className="loginForm">
      <Paragraph textProps={"#434854-24-600"}>Login</Paragraph>
      <Paragraph textProps={"#737373-16-400"}>
        Kindly enter your details to log in
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Email Address"
          height={48}
          className={`${isError.email ? "error" : ""}`}
          type="email"
          value={email}
          onChange={(e) =>
            isError.email
              ? setIsError({ ...isError, email: false })
              : setEmail(e.target.value)
          }
          message={isError.email && isError.message}
        />
        <Input
          height={48}
          placeholder="Password"
          className={`${isError.password ? "error" : ""}`}
          type="password"
          value={password}
          onChange={(e) =>
            isError.password
              ? setIsError({ ...isError, password: false })
              : setPassword(e.target.value)
          }
          message={isError.password && isError.message}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link size="14" color="#0a74dc">
        Forgot your password?
      </Link>
      <Paragraph textProps={"#b0b9c8-12-400"}>
        <Link size="12" color="#737373">
          Privacy Policy
        </Link>
        and
        <Link size="12" color="#737373">
          Terms of services
        </Link>
      </Paragraph>
    </div>
  );
};

export default LoginForm;
