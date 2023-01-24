import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import "@/styles/globals.css";

import { Layout } from "@/layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
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
  );
}
