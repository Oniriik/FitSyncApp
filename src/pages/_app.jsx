import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Layout } from "@/layout";

import "@/styles/globals.css";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
      },
    }),
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <SessionProvider session={session}>
        <Layout>
          <AnimatePresence>
            <motion.div
              className="animated-frame"
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.5,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {},
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  );
}
