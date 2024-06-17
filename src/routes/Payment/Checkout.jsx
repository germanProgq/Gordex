// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import useIsMobile from "../../shared/hooks/useIsMobile"
import "./styles/checkout.css"

function Checkout() {
    const isMobile = useIsMobile(1000);

    if (!isMobile) return (
      <>
        <div className="wrapper">
          <Navbar/>
          <main className="main">

            <section className="checkout-content">
              <div className="container">
                <div className="checkout__wrapper">
                  <div className="checkout__pay">
                    <h3 className="checkout__pay-title">Payment Method</h3>
                    <div className="checkout__pay-total">
                      <img src="/images/checkout/tether.svg" alt="" className="checkout__pay-currency" />
                      <div className="checkout__pay-total-info">
                        <p className="checkout__pay-total-text">Total amount payable</p>
                        <p className="checkout__pay-total-price"><span className="checkout__pay-total-span">7,432</span> USDT</p>
                      </div>
                    </div>
                    <h3 className="checkout__pay-title">Balance Your Wallet</h3>
                    <div className="checkout__pay-total">
                      <img src="/images/checkout/tether.svg" alt="" className="checkout__pay-currency" />
                      <div className="checkout__pay-total-info">
                        <p className="checkout__pay-total-price"><span className="checkout__pay-total-span">0,000</span> USDT</p>
                        <div className="checkout__pay-total-info-bottom">
                          <p className="checkout__pay-total-usd"><span className="checkout__pay-total-usd-span">28 216,50</span> USD</p>
                          <div className="checkout__pay-total-rate">
                            1,92 %
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="checkout__pay-btn">Cancel Payment <img src="/images/checkout/cross.svg" alt="" className="checkout__pay-btn-icon" /></a>
                  </div>
                  <div className="checkout__fast">
                    <h3 className="checkout__fast-title">Fast Payment</h3>
                    <p className="checkout__fast-text">Cryptocurrency wallet address :  <span className="checkout__fast-span"> USDT TRC20</span></p>
                    <div className="address checkout__address">
                      <p className="address__value">TD8LgjB7y39S7p7QTZe47Tznzi5YdNKfwf</p>
                      <button className="address__btn">
                        <img src="/images/checkout/copy.svg" alt="" className="address__btn-icon" />
                      </button>
                    </div>
                    <p className="checkout__fast-alert"><img src="/images/checkout/danger.svg" alt="" /> Specify exactly the same amount, otherwise the processing time will increase </p>
                    <div className="address checkout__address checkout__address--second">
                      <p className="address__value">7436</p>
                      <button className="address__btn">
                        <img src="/images/checkout/copy.svg" alt="" className="address__btn-icon" />
                      </button>
                    </div>
                    <div className="message checkout__message">
                      <img src="/images/checkout/bell.svg" alt="" className="message-icon" />
                      The waiting time for a transaction is limited, but you can extend the time. 
                    </div>
                    <div className="message checkout__message">
                      <img src="/images/checkout/bell.svg" alt="" className="message-icon" />
                      Aggregator of exchangers, make a payment in a convenient exchanger in two clicks
                    </div>
                    <img src="/images/checkout/chevron-thin.svg" alt="" className="checkout__fast-chevron" />
                    <img src="/images/checkout/bestchange.svg" alt="" className="checkout__fast-logo" />
                  </div>
                  <div className="checkout__time">
                    <h3 className="checkout__time-title">Payment waiting time</h3>
                    <div className="time">
                      <div className="time__percent">
                        <div className="time__dot"></div>
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <button className="time__btn">
                          <img src="/images/checkout/time-light.svg" alt="" className="time__btn-icon" />
                          + 1 hour
                        </button>
                        <div className="time__value">2:52:40</div>
                      </div>
                    </div>
                    <a href="#" className="checkout__time-link">I did the translation <img src="/images/checkout/circled-arrow.svg" alt="" className="checkout__time-link-icon" /></a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer/>
        </div>
      </>
    )

    if (isMobile) return (
        <>
          <div className="wrapper">
            <Navbar/>
            <main className="main">

              <section className="checkout-content">
                <div className="container">
                  <div className="checkout__wrapper">
                    <div className="checkout__pay">
                      <div className="checkout__pay-info">
                        <h3 className="checkout__pay-title">Payment Method</h3>
                        <div className="checkout__pay-total">
                          <img src="/images/checkout/tether.svg" alt="" className="checkout__pay-currency" />
                          <div className="checkout__pay-total-info">
                            <p className="checkout__pay-total-text">Total amount payable</p>
                            <p className="checkout__pay-total-price"><span className="checkout__pay-total-span">7,432</span> USDT</p>
                          </div>
                        </div>
                        <h3 className="checkout__pay-title">Balance Your Wallet</h3>
                        <div className="checkout__pay-total">
                          <img src="/images/checkout/tether.svg" alt="" className="checkout__pay-currency" />
                          <div className="checkout__pay-total-info">
                            <p className="checkout__pay-total-price"><span className="checkout__pay-total-span">0,000</span> USDT</p>
                            <div className="checkout__pay-total-info-bottom">
                              <p className="checkout__pay-total-usd"><span className="checkout__pay-total-usd-span">28 216,50</span> USD</p>
                              <div className="checkout__pay-total-rate">
                                1,92 %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout__pay-time">
                        <div className="time">
                          <div className="time__percent">
                            <div className="time__dot"></div>
                            <svg>
                              <circle cx="70" cy="70" r="70"></circle>
                              <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="time__value">52:40</div>
                            <div className="time__text">Payment time</div>
                          </div>
                        </div>
                        <button className="time__btn">
                              <img src="/images/checkout/time-light.svg" alt="" className="time__btn-icon" />
                              + 30 min
                        </button>
                      </div>
                      
                    </div>
                    <div className="checkout__fast">
                      <h3 className="checkout__fast-title">Fast Payment</h3>
                      <p className="checkout__fast-text">Cryptocurrency wallet address :  <span className="checkout__fast-span"> USDT TRC20</span></p>
                      <div className="address checkout__address">
                        <p className="address__value">TD8LgjB7y39S7p7QTZe47Tznzi5YdNKfwf</p>
                        <button className="address__btn">
                          <img src="/images/checkout/copy.svg" alt="" className="address__btn-icon" />
                        </button>
                      </div>
                      <p className="checkout__fast-alert"><img src="/images/checkout/danger.svg" alt="" /> Specify exactly the same amount, otherwise the processing time will increase </p>
                      <div className="address checkout__address checkout__address--second">
                        <p className="address__value">7436</p>
                        <button className="address__btn">
                          <img src="/images/checkout/copy.svg" alt="" className="address__btn-icon" />
                        </button>
                      </div>
                      <div className="message checkout__message">
                        <img src="/images/checkout/bell.svg" alt="" className="message-icon" />
                        The waiting time for a transaction is limited, but you can extend the time. 
                      </div>
                      <div className="message checkout__message">
                        <img src="/images/checkout/bell.svg" alt="" className="message-icon" />
                        Aggregator of exchangers, make a payment in a convenient exchanger in two clicks
                      </div>
                      <img src="/images/checkout/chevron-thin.svg" alt="" className="checkout__fast-chevron" />
                      <img src="/images/checkout/bestchange.svg" alt="" className="checkout__fast-logo" />
                      <a href="#" className="checkout__time-link">I did the translation <img src="/images/checkout/circled-arrow.svg" alt="" className="checkout__time-link-icon" /></a>
                      <a href="#" className="checkout__pay-btn">Cancel Payment <img src="/images/checkout/cross.svg" alt="" className="checkout__pay-btn-icon" /></a>
                    </div>
                      
                  </div>
                </div>
              </section>
            </main>
            {/* <Footer/> */}
          </div>
        </>
    )
}

export default Checkout