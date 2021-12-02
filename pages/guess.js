import Head from 'next/head'
import styles from '../styles/Guess.module.css'

export default function Home() {

  return (
    <div>
        <Head>
            <title>???</title>
            <link rel="icon" href="/images/norev.jpg" />

            <meta property="og:title" content="Crazy Suit Cases" key="ogtitle" />
            <meta property="og:description" content="Ouch! What is it? It's a runaway CazySuitcase! He needs a new home." key="ogdesc" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://crazysuitcases.club/" key="ogurl"/>
            <meta property="og:image" content="https://crazysuitcases.club/images/suit.jpg" key="ogimage"/>
            <meta property="og:site_name" content="https://crazysuitcases.club/" key="ogsitename" />
        </Head>

        <div className={styles.thinkimg}>
            <img src="/images/think.png"></img>
            <a href="/sneak-peak" className={styles.athink}> hi</a>
        </div>
      
    </div>  
    )
  }