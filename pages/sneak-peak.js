import Head from 'next/head'
import styles from '../styles/Guess.module.css'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
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

    <div id="story" className="flex flex-wrap justify-center items-center py-6">
        <div className="flex flex-col justify-between w-1/3 pt-6 GardeneStone">
            <h1 className={ styles.sneakh1 }>Good, job! You've found me!</h1>
            <img src="/images/6824.jpg" className={ styles.sneakimg }/>
            <p className={ styles.sneakp }>
                My hat is so unique! <br/>
                0.5 %
            </p>
        </div>
    </div>
      
    </div>  
    )
  }