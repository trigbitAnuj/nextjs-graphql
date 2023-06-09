import ClientOnly from '@/components/ClientsOnly'
import Countries from '@/components/Countries'
import styles from "@/styles/Home.module.css"
import Head from 'next/head';


export default function ClientSide() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <ClientOnly>
            <Countries />
          </ClientOnly>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img decoding="async" src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    );
  }