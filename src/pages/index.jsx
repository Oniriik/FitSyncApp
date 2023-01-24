import Head from "next/head";
import { LogoCard } from "@/components";
export default function Home() {
  return (
    <>
      <Head>
        <title>FitSync</title>
        <meta name="description" content="Future of fitness apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <LogoCard></LogoCard>
      </main>
    </>
  );
}
