import * as Styled from "./styled";
import { Navbar } from "@/components";
export const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      {children}
      <Navbar />
    </Styled.Layout>
  );
};
