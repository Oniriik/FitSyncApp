import * as Styled from "./styled";
import { LogoCard } from "@/components/logoCard";
import { signIn } from "next-auth/react";

export const Landing = () => {
  return (
    <Styled.Landing>
      <LogoCard />
      <button onClick={() => signIn("Credentials")}>Enter Now</button>
    </Styled.Landing>
  );
};
