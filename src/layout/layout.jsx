import * as Styled from "./styled";
import { Navbar } from "@/components";
import { UILoader } from "@/components";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <Styled.Layout>
      {isLoading && <UILoader />}
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Navbar />
    </Styled.Layout>
  );
};
