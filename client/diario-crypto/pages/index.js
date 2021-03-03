import { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [coinMonksPosts, setCoinMonksPosts] = useState([]);

  useEffect(() => {
    fire.firestore()
      .collection('coinMonks')
      .onSnapshot((snap) => {
        const posts = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCoinMonksPosts(posts);
      });
  }, []);

  console.log(coinMonksPosts);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Diario Crypto.
        </h1>

        <div className={styles.card}>

        </div>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
