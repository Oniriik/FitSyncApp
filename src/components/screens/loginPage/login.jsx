import * as Styled from "./styled";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { LogoCard } from "@/components/logoCard";
import { Icon } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Username"
          focusBorderColor="#E47D0F"
          color="#DDDDDD"
        />
        <InputGroup size="md">
          <Input
            id="password"
            name="password"
            type={show ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="password"
            focusBorderColor="#E47D0F"
            color="#DDDDDD"
          />
          <InputRightElement>
            <Icon
              as={show ? AiOutlineEye : AiOutlineEyeInvisible}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>

        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </Styled.Login>
  );
};
