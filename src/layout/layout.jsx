import * as Styled from "./styled";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Header, LayoutLeft } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { freeRoutes } from "./config";
import { useSession } from "next-auth/react";

export const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const displayNav = !freeRoutes.includes(router.pathname);
  const [isLayoutLeft, setIsLayoutLeft] = useState(false);

  const toggleLayoutLeft = () => {
    setIsLayoutLeft(!isLayoutLeft);
  };

  useEffect(() => {
    console.log(status);
    if (router.pathname.includes("/app") && status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <Styled.Layout>
      <AnimatePresence>
        {isLayoutLeft && (
          <motion.div
            className="loader"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.2,
            }}
            variants={{
              initialState: { x: "-100%" },
              animateState: { x: "0%" },
              exitState: { x: "-100%" },
            }}
          >
            <LayoutLeft handleClick={toggleLayoutLeft} />
          </motion.div>
        )}
      </AnimatePresence>
      {displayNav && <Header handleClick={toggleLayoutLeft} />}
      <Styled.MainContainer>{children}</Styled.MainContainer>
      {displayNav && <Navbar />}
    </Styled.Layout>
  );
};
