import * as Styled from "./styled";
import Image from "next/image";

export const UILoader = () => {
  return (
    <Styled.Loader>
      <Styled.LogoCard>
        <Image
          src="/FITSYNC.svg"
          alt="app-logo"
          width={70}
          height={70}
          priority
        />
      </Styled.LogoCard>
    </Styled.Loader>
  );
};
