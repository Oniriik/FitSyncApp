import * as Styled from "./styled";
import { Navbar } from "@/components";
export const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Navbar />
    </Styled.Layout>
  );
};
