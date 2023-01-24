import * as Styled from "./styled";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar, Header, LayoutLeft } from "@/components";
import { UILoader } from "@/components";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLayoutLeft, setIsLayoutLeft] = useState(false);
  console.log(isLayoutLeft);

  const toggleLayoutLeft = () => {
    setIsLayoutLeft(!isLayoutLeft);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <Styled.Layout>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.2,
            }}
            variants={{
              initialState: {
                opacity: 1,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <UILoader />
          </motion.div>
        )}
      </AnimatePresence>
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
      <Header handleClick={toggleLayoutLeft} />
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Navbar />
    </Styled.Layout>
  );
};
