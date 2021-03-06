import { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import { diarioCryptoData, webReference } from '../config/pagesData';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [postsData, setPostsData] = useState({
    coinMonks: [],
    coinTelegraphPosts: [],
    consensys: [],
    simpleAsWater: []
  });

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    diarioCryptoData.forEach((element, idx) => {
      fire.firestore()
        .collection(element)
        .onSnapshot((snap) => {
          const posts = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setPostsData({
            ...postsData,
            [element]: [...posts]
          })
        });
    });
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>diario.crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Diario Crypto.
        </h1>

        <div className={styles.card}>
          <div className={styles.grid}>
            {
              postsData.coinMonks.length > 0 && (
                postsData.coinMonks.map((item, idx) => {
                  console.log(item)
                  return (
                    <a className={styles.card} key={idx}>
                      <h3>{item.title}</h3>
                    </a>
                  )
                })
              )
            }
          </div>
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
