import * as Styled from "./styled";
import Image from "next/image";

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
    </Styled.LayoutLeft>
  );
};
