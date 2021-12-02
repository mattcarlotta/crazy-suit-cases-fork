import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CrazySuitcases</title>
        <link rel="icon" href="/images/logo.png" />

        <meta property="og:title" content="Crazy Suit Cases" key="ogtitle" />
        <meta property="og:description" content="Ouch! What is it? It's a runaway CazySuitcase! He needs a new home." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://crazysuitcases.club/" key="ogurl"/>
        <meta property="og:image" content="https://crazysuitcases.club/images/suit.jpg" key="ogimage"/>
        <meta property="og:site_name" content="https://crazysuitcases.club/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://crazysuitcases.club/" key="twurl" />
        <meta name="twitter:title" content="Crazy Suit Cases" key="twtitle" />
        <meta name="twitter:description" content="Ouch! What is it? It's a runaway CazySuitcase! He needs a new home." key="twdesc" />
        <meta name="twitter:image" content="https://crazysuitcases.club/images/suit.jpg" key="twimage" />
      </Head>

      {/* Navigation */}
      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row py-6 justify-around GardeneStone">
              <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a>
              {/* <a href="/mint" className="text-4xl text-green-400 hover:text-black m-6">MINT!</a> */}
              <a href="/presale" className="text-4xl text-blue-600 hover:text-black m-6">PreSale</a>
              <a href="#story" className="text-4xl text-white hover:text-black m-6">Story</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="#next" className="text-4xl text-white hover:text-black m-6">Stamps</a>
              <a href="#team" className="text-4xl text-white hover:text-black m-6">Team/Contact</a>
              <a href="https://twitter.com/crazy_suitcases" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/x9Futw6MsH" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>
        {/* Nav End */}

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4 priority-1">
                    <h1 className="text-7xl GardeneStone text-white ">When was the last time you used <span className="text-blau">suitcases</span>?</h1>
                    <p className="text-2xl text-white py-6  josaf">I think a long time ago, so meet these <span className="text-3xl GardeneStone text-blau">CrazySuitcases!</span> <br/>  
                    For the <span className="text-3xl GardeneStone text-blau">first time in the history of NFT</span>, you can attach Stamps to them.</p>
                    <span className="text-5xl Poppitandfinch text-redor">It's time to remind the world of travel.</span>
                    <div className="text-2xl text-white py-6  josaf flex flex-col items-left">
                      <p className="my-1"><strong>LAUNCH DATE: </strong> Soon...</p>
                      <p className="my-1"><strong>TOTAL SUPPLY: 10000</strong> CrazySuitcases.</p>
                      <p className="my-1"><strong>PRICE: 0.03 ETH </strong>each.</p>
                    </div>
                    <div className="flex flex-col items-center">
                    {/* <iframe src="https://free.timeanddate.com/countdown/i7xe0hwa/n166/cf12/cm0/cu4/ct2/cs1/cacf7c34a/co0/cr0/ss0/cacfbc036/cpc900/pct/tcfff/fn3/fs250/iso2021-08-13T00:00:00" allowtransparency="true" frameborder="0" width="220" height="63"></iframe> */}

                    </div>

                  </div>
                  {/* Slider */}
                  <div className="lg:w-1/2 w-3/4 priority-2">
                      <div className="slider overflow-hidden">
                        <div className="slides">
                          <input type="radio" name="r" id="r1" defaultChecked/>
                          <input type="radio" name="r" id="r2"/>
                          <input type="radio" name="r" id="r3"/>
                          <input type="radio" name="r" id="r4"/>
                          
                          <div className="slide s1"><img src="images/suit.jpg" alt=""/></div>
                          <div className="slide"><img src="images/20.jpg" alt=""/></div>
                          <div className="slide"><img src="images/36.jpg" alt=""/></div>
                          <div className="slide"><img src="images/328.jpg" alt=""/></div>
                          
                        </div>
                        <div className="navigation">
                          <label htmlFor="r1" className="bar"></label>
                          <label htmlFor="r2" className="bar"></label>
                          <label htmlFor="r3" className="bar"></label>
                          <label htmlFor="r4" className="bar"></label>
                        </div>
                      </div>
                  </div>
                  {/* Slider end */}
            </div>
            <div className="flex flex-col items-center">

            <a href="/presale" className="mt-4 GardeneStone lg:text-4xl text-xl border-6 bg-blau  text-white hover:text-black p-2 rounded-md">PRESALE PAGE</a>
                
                
            </div> 
            </div>



    
              {/* Story */}
              <div id="story" className="flex flex-wrap justify-center items-center py-6">
                <div className="flex flex-col justify-between w-full pt-6">
                  <h2 className="text-blau GardeneStone text-6xl text-center">Story of origin</h2>
                  <p className="text-3xl text-white py-6  josaf"> During COVID-19, people almost stopped <strong>traveling</strong>. Because of this, their suitcases stopped fulfilling their function. They have been lying around and gathering dust in people's homes for a <strong>long time</strong>. This affected the suitcases so much that they began to go <span className="text-redor text-bold">crazy</span>. The CrazySuitcases ran away from their homes.  
                  </p>
                  <p className="text-3xl text-white py-6  josaf"> Our team rescued the crazy suitcases. But they need new homes.
                  </p>
                  <p className="text-3xl text-white py-6  josaf"> Only <span className="text-bold text-redor">you</span> can help them and shelter them!
                  </p>
                </div>
              </div>
              {/* Story end */}

              {/* Roadmap */}
              <div id="roadmap" className="flex flex-col divide-y-2 roadmap">
                <h2 className="text-blau GardeneStone text-6xl text-center py-6">Roadmap (<span className="text-6xl GardeneStone text-white my-3">% SOLD</span>)</h2>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="text-7xl GardeneStone text-white my-3">25 %</h1></div>
                  <div className="w-3/4 ml-5">
                    <h1 className="lg:text-5xl text-4xl GardeneStone text-blau"> <span className="josaf align-middle text-redor">20</span> lucky winners will each receive <span className="josaf align-middle text-redor">0.5 ETH</span>! The minted CrazySuitcase is the ticket. </h1>
                  </div>
                </div>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="text-7xl GardeneStone text-white my-3">50 %</h1>
                  </div>
                  <div className="w-3/4 ml-5 ">
                    <h1 className="lg:text-5xl text-4xl GardeneStone text-white text-blau"> <span className="josaf align-middle text-redor">20</span> CrazySuitcases giveaway! Every CrazySuitcase in your wallet is a chance to 
                    <span className="Poppitandfinch align-middle text-7xl"> win</span>. </h1>
                  </div>
                </div>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="text-7xl GardeneStone text-white my-3">75 %</h1></div>
                  <div className="w-3/4 ml-5">
                    <h1 className="lg:text-5xl text-4xl GardeneStone text-white text-blau"> 
                    Donating  
                    <span className="josaf text-redor align-middle"> 10 ETH </span>
                     to poor people around the world. Check out <a id="givecrypto" href="https://givecrypto.org/" className="mosaic lg:text-5xl text-3xl givecrypto align-middle">givecrypto.org</a> for more information. 
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="text-7xl GardeneStone text-white my-3">100 %</h1></div>
                  <div className="w-3/4 ml-5 ">
                    <h1 className="lg:text-6xl text-5xl GardeneStone text-white text-blau">
                       <span className="josaf text-redor"> 10 </span> suitcase holders will receive 1 ETH each! 
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="lg:text-7xl text-4xl GardeneStone text-white my-3">October</h1></div>
                  <div className="w-3/4 ml-5 ">
                    <h1 className="lg:text-6xl text-5xl GardeneStone text-white text-blau">
                      Technical preparation of the<span className="josaf text-redor"> stamp collection</span>. 
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row py-6">
                  <div className="w-1/4 text-center flex justify-center items-center"><h1 className="lg:text-7xl text-4xl GardeneStone text-white my-3">November</h1></div>
                  <div className="w-3/4 ml-5 ">
                    <h1 className="lg:text-6xl text-5xl GardeneStone text-white text-blau">
                       Launching a stamp collection! For the first time <span className="josaf text-redor">EVER</span>, we will make stamps that can be attached to suitcases. This way you can buy stamps and <span className="josaf text-redor">increase the value</span> of your suitcase. Details below. 
                    </h1>
                  </div>
                </div>
              </div>

              {/* Continue */}
              <div id="next" className="flex flex-wrap justify-center items-center py-6">
                <div className="flex flex-col justify-between w-full pt-6 border-4 rounded-2xl stamps">
                  <h2 className="text-redor GardeneStone text-6xl text-center">Collection of stamps.</h2>
                  <p className="text-4xl text-white py-6 text-center josaf">A collection of stamps will be released in <span className="text-blau">November</span> for you to attach to your suitcases. This will be done using the interface on the site. Thus, if you have a rare suitcase and there are rare stickers on it, then this suitcase will become even more <span className="text-blau">valuable</span>.</p>
                  <p className="text-4xl text-white py-6 text-center josaf">All this will be stored in the database. You will also see stamps on the picture of your suitcase. The number of brands is limited.</p>
                  <h2 className="text-blau GardeneStone text-6xl text-center mt-5">Conditions:</h2>
                  <p className="text-4xl text-white py-6 text-center josaf"><span className="text-blau text-5xl GardeneStone">1.</span> One stamp costs 0.01 ETH. (Price may change due to the growth of ETH)</p>
                  <p className="text-4xl text-white py-6 text-center josaf"><span className="text-blau text-5xl GardeneStone">2.</span> Each suitcase holder can exchange the suitcase for 3 stamps.</p>
                  <p className="text-4xl text-white py-6 text-center josaf"><span className="text-blau text-5xl GardeneStone">3.</span> Three stamps cannot be converted into a suitcase.</p>
                </div>
              </div>

              {/* Why us? */}
              <div id="story" className="flex flex-wrap justify-center items-center py-6 mb-20">
                <div className="flex flex-col justify-between w-full pt-6">
                  <h2 className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl border-4 border-white text-blau GardeneStone text-6xl text-center py-6">Why us!?</h2>
                  <p className="text-4xl text-white py-6  incon"> Our team analyzed most <span className="text-green-400">successful</span> and <span className="text-red-400">unsuccessful</span> NFT collections. Based on this research, we put together a social media promotion plan.</p>
                  <p className="text-4xl text-white py-6  incon">In this way we want to achieve a high value of the suitcases after they sell out.</p>
                </div>
              </div>

              {/* Team */}
              <div id="team" className="mx-12 my-16 border-t-2">
                <h2 className="text-7xl text-center GardeneStone text-blau my-4">OUR TEAM</h2>
                  <div className="flex justify-around flex-wrap">
                    <div className="flex flex-col  py-6" style={{width:"360px"}}>
                      <div className="cards-image-mask"><img src="/images/maxet.jpg" width="360px" alt="" className="cards-image rounded-full" /></div>
                      <h3 className="my-4 text-center text-5xl text-center GardeneStone text-blau">Maxet</h3>
                      <a href="https://twitter.com/MaxetArts" className="text-center text-4xl text-center GardeneStone underline text-white"> @MaxetArts</a>
                    </div>
                    <div className="flex flex-col  py-6" style={{width:"360px"}}>
                      <div className="cards-image-mask"><img src="/images/pust.jpg" width="360px" alt="" className="cards-image rounded-full" /></div>
                      <h3 className="my-4 text-center text-5xl text-center GardeneStone text-blau">Pustovit</h3>
                      <a href="https://www.shutterstock.com/ru/g/artpustovit" className="text-center text-4xl text-center GardeneStone underline text-white"> ShutterStock</a>                
                    </div>
                  </div>
              {/* Team end */}

              </div>   
              <div id="contact" className="flex flex-wrap justify-around items-center py-6">
                  <div className=" p-4"><h2 className="text-blau GardeneStone text-6xl text-center">CONTACT US:</h2></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-full py-6 ">
                    <p className="text-2xl text-white py-6  josaf font-bold">
                      <a className="links" target="_blank" href="mailto:crazysuitcases@gmail.com">crazysuitcases@gmail.com</a><br/>
                      <a className="links" target="_blank" href="https://twitter.com/crazy_suitcases">@crazy_suitcases</a><br/> 
                      <a className="links" target="_blank" href="https://discord.gg/x9Futw6MsH">Discord Server</a>
                    </p>
                  </div>
              </div>   
          </div>  
    </div>  
    )
  }