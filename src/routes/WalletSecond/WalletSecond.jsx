// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import useIsMobile from "../../shared/hooks/useIsMobile"
import style from "./styles/style.module.css"

function WalletSecond() {
    const isMobile = useIsMobile(1000);

    return (
      <>
        <div className={`${style.wrapper}`}>
          <Navbar/>
          <main className={`${style.main}`}>
            <section className={`${style.wallet}`}>
              <div className="container">
                <div className={`${style.wallet__top}`}>
                  <button className="wallet__top-btn"><img src="/images/wallet/arrow.svg" alt="" /></button>
                  <h2 className={`${style.wallet__topTitle}`}>Wallet</h2>
                </div>
                <div className={`${style.wallet__wrapper}`}>
                  <div className={`${style.wallet__balance}`}>
                    <div>
                      <h3 className={`${style.wallet__title}`}>Balance Your Wallet</h3>
                      <div className={`${style.wallet__item}`}>
                        <img src="/images/wallet/doge.svg" alt="" className={`${style.wallet__itemIcon}`} />
                        <div className="wallet__item-info">
                          <div className={`${style.wallet__itemPrice}`}>0,000 <span>DOGE</span></div>
                          <div className={`${style.wallet__itemRate}`}>1,92 %</div>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.time}`}>
                      <div className={`${style.time__percent}`}>
                        <div className={`${style.time__dot}`}></div>
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <button className={`${style.time__btn}`}>
                          <img src="/images/wallet/clock.svg" alt="" className={`${style.time__btnIcon}`} />
                          + 1 hour
                        </button>
                        <div className={`${style.time__value}`}>2:52:40</div>
                        <div className={`${style.time__text}`}>Payment time</div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__trans">
                    <h4 className={`${style.wallet__transTitle}`}>Payment transaction</h4>
                    <div className={`${style.wallet__transAmount}`}>
                      <div className={`${style.wallet__transAmountBox}`}>
                        <div className={`${style.wallet__transAmountValue}`}>2,784 <button className={`${style.wallet__transAmountCopy}`}><img src="/images/wallet/copy.svg" alt="" /></button></div>
                        <button className={`${style.wallet__transAmountBtn}`}>Change amount</button>
                      </div>
                      <p className={`${style.wallet__transAmountText}`}>
                        <img src="/images/wallet/bell.svg" alt="" className="wallet__trans-amount-icon" />
                        Amount : Specify exactly the same amount, otherwise the processing time will increase 
                      </p>
                    </div>
                    <h4 className={`${style.wallet__transTitle}`}>To replenish the balance, transfer <span>DOGE</span> to the address</h4>
                    <div className="wallet__trans-address">
                      <div className="wallet__trans-address-box">
                        <div className={`${style.wallet__transAddressValue}`}>TD8LgjB7y39S7p7QTZe47Tznzi5YdNKfwf <button className={`${style.wallet__transAddressCopy}`}><img src="/images/wallet/copy.svg" alt="" /></button></div>
                        <p className={`${style.wallet__transAddressText}`}>
                          <img src="/images/wallet/bell.svg" alt="" className="wallet__trans-address-icon" />
                          The waiting time for a transaction is limited, but you can extend the time. 
                        </p>
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

export default WalletSecond