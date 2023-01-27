import * as Styled from "./styled";
import { LogoCard } from "@/components/logoCard";
import { signIn } from "next-auth/react";

export const Landing = () => {
  return (
    <Styled.Landing>
      <LogoCard />
      <button
        onClick={() =>
          signIn("Credentials", {
            callbackUrl: `${window.location.origin}/app`,
          })
        }
      >
        Enter Now
      </button>
    </Styled.Landing>
  );
};
