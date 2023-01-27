import * as Styled from "./styled";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { Input } from "@chakra-ui/react";
import { LogoCard } from "@/components/logoCard";
export const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      signIn("credentials", {
        redirect: true,
        username: values.username,
        password: values.password,
        callbackUrl: "/app",
      });
    },
  });
  return (
    <Styled.Login>
      <LogoCard size={100} />
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Username"
          focusBorderColor="#E47D0F"
          color="#DDDDDD"
        />
        <Input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          focusBorderColor="#E47D0F"
          color="#DDDDDD"
        />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </Styled.Login>
  );
};
