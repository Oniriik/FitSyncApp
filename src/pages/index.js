import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>FitSync</title>
        <meta name="description" content="Future of fitness apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <div className={styles.square}>
            <Image
              src="/FITSYNC.svg"
              alt="app-logo"
              width={150}
              height={150}
              priority
            />
          </div>
      </main>
    </>
  )
}
