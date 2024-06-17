// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import style from "./styles/style.module.css"

function WalletFirst() {

    return (
      <>
        <div className={`${style.wrapper}`}>
          <Navbar/>
          <main className={style.main}>
            <section className={`${style.wallet}`}>
              <div className="container">
                <div className={`${style.wallet__top}`}>
                  <button className="wallet__top-btn"><img src="/images/wallet/arrow.svg" alt="" /></button>
                  <h2 className={`${style.wallet__topTitle}`}>Wallet</h2>
                </div>
                <div className={`${style.wallet__wrapper}`}>
                  <div className={`${style.wallet__balance}`}>
                    <div className="">
                      <h3 className={`${style.wallet__title}`}>Balance Your Wallet</h3>
                      <div className={`${style.wallet__item}`}>
                        <img src="/images/wallet/doge.svg" alt="" className={`${style.wallet__itemIcon}`} />
                        <div className="wallet__item-info">
                          <div className={`${style.wallet__itemPrice}`}>0,000 <span>DOGE</span></div>
                          <div className={`${style.wallet__itemRate}`}>1,92 %</div>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.wallet__calc}`}>
                        <h3 className={`${style.wallet__calcTitle}`}><span className={`${style.wallet__calcIcon}`}><img src="/images/profile/calc.svg" alt="" /> </span> Calculator</h3>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="100 eur" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>EUR</button>
                        </form>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="110.2510 usd" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>USD</button>
                        </form>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="0.0036 btc" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>BTC</button>
                        </form>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="110.1408 usdt" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>USDT</button>
                        </form>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="0.0523 eth" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>ETH</button>
                        </form>
                        <form className={`${style.wallet__calcForm}`}>
                          <input placeholder="1.1428 ltc" type="text" className={`${style.wallet__calcInput}`} />
                          <button className={`${style.wallet__calcSubmit}`}>LTC</button>
                        </form>
                      </div>
                  </div>
                  <div className="wallet__trans">
                    <h4 className={`${style.wallet__transTitle}`}>Enter the recharge amount</h4>
                    <div className={`${style.wallet__transAmount}`}>
                      <form className={`${style.wallet__transAmountBox}`}>
                        <input placeholder="0,000" type="text" className={`${style.wallet__transAmountInput}`} />
                        <button type="submit" className={`${style.wallet__transAmountBtn}`}>Get a billing address</button>
                      </form>
                      <p className={`${style.wallet__transAmountText}`}>
                        <img src="/images/wallet/bell.svg" alt="" className="wallet__trans-amount-icon" />
                        Specify the amount in the cryptocurrency of your choice
                      </p>
                    </div>
                    <h4 className={`${style.wallet__transTitle}`}>To replenish the balance, transfer <span>DOGE</span> to the address</h4>
                    <div className="wallet__trans-address">
                      <div className="wallet__trans-address-box">
                        <div className={`${style.wallet__transAddressValue}`}>Specify the refill amount <button className={`${style.wallet__transAddressCopy}`}><img src="/images/wallet/copy.svg" alt="" /></button></div>
                        <p className={`${style.wallet__transAddressText}`}>
                          <img src="/images/wallet/bell.svg" alt="" className="wallet__trans-address-icon" />
                          Aggregator of exchangers, make a payment in a convenient exchanger in two clicks
                        </p>
                      </div>
                    </div>
                    <img src="/images/wallet/chevron.svg" alt="" className={`${style.wallet__transChevron}`} />
                    <img src="/images/wallet/bestchange.svg" alt="" className={`${style.wallet__transImg}`} />
                    <button className={`${style.wallet__btn}`}>I did the translation. Verify the transaction. <img src="/images/wallet/circled-arrow.svg" alt="" className={`${style.wallet__btnIcon}`} /></button>
                  </div>
                  <div className={`${style.wallet__referral}`}>
                    <h3 className={`${style.wallet__title} ${style.wallet__titleDecorated}`}>Referral program. Convert profitably </h3>
                    <div className={`${style.wallet__referralItems}`}>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/binance.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>Binance</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/coinbase.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>CoinBase</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/kraken.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>Kraken</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/kucoin.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>KuCoin</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/bitfinex.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>BitFinex</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/bitstamp.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>Bitstamp</p>
                      </div>
                      <div className="wallet__referral-item">
                        <img src="/images/wallet/bybit.svg" alt="" className={`${style.wallet__referralItemImg}`} />
                        <p className={`${style.wallet__referralItemText}`}>ByBit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer/>
        </div>
      </>
    )

    // if (isMobile) return (
    //     <>
    //       <div className="wrapper">
    //         <Navbar/>
    //         <main className="main">
    //         </main>
    //         <Footer/>
    //       </div>
    //     </>
    // )
}

export default WalletFirst