import * as Styled from "./styled";
import Image from "next/image";
export const Header = ({ handleClick }) => {
  return (
    <Styled.Header>
      <div
        className="btn"
        onClick={() => {
          handleClick();
        }}
      >
        <Image
          className="avatar"
          src="/assets/ellipsis-vertical-solid.svg"
          alt="avatar"
          width={20}
          height={20}
          priority
        />
      </div>
      <div className="btn">
        <Image
          className="avatar"
          src="/assets/magnifying-glass-solid.svg"
          alt="avatar"
          width={20}
          height={20}
          priority
        />
      </div>
    </Styled.Header>
  );
};
