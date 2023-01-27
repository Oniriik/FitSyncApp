import * as Styled from "./styled";
import { signIn } from "next-auth/react";
import { Formik, Form, Field } from "formik";
import { Input } from "@chakra-ui/react";
import { LogoCard } from "@/components/logoCard";
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
      <LogoCard size={100} />
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
          <Field
            component={Input}
            id="username"
            name="username"
            placeholder="Username"
            focusBorderColor="#E47D0F"
          />

          <Field
            component={Input}
            id="password"
            name="password"
            placeholder="Password"
            focusBorderColor="#E47D0F"
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </Styled.Login>
  );
};
