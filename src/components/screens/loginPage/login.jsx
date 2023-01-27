import * as Styled from "./styled";
import { signIn } from "next-auth/react";
import { Formik, Form, Field } from "formik";

export const LoginPage = () => {
  const handleLogin = (values) => {
    console.log(values);
    signIn("credentials", {
      redirect: true,
      username: values.username,
      password: values.password,
      callbackUrl: "/app",
    });
  };

  return (
    <Styled.Login>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        <Form className="login-form">
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="John" />

          <label htmlFor="password">Last Name</label>
          <Field id="password" name="password" placeholder="Doe" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Styled.Login>
  );
};
