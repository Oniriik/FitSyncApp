import * as Styled from "./styled";
import Image from "next/image";
import { signOut } from "next-auth/react";

export const LayoutLeft = ({ handleClick }) => {
  return (
    <Styled.LayoutLeft>
      <Image
        className="icon"
        src="/assets/arrow-left-solid.svg"
        alt="return-icon"
        width={20}
        height={20}
        priority
        onClick={() => handleClick()}
      />
      <button onClick={() => signOut()}>logout</button>
    </Styled.LayoutLeft>
  );
};
