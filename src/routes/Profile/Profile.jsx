// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./styles/style.css"

function Profile() {

    return (
      <>
        <div className="wrapper">
          <Navbar/>
          <main className="main">
            <section className="profile">
              <div className="container">
                <div className="profile__inner">
                  <div className="profile__main">
                    <h2 className="profile__title">Profile</h2>
                    <div className="profile__settings">
                      <p className="profile__date">Registration date:  <span className="profile__date-span">22.01.2019</span></p>
                      <div className="profile__settings-item">
                        <button className="profile__settings-btn">
                          <img src="/images/profile/edit.svg" alt="" className="profile__settings-icon" />
                          Country: 
                        </button>
                        <p className="profile__settings-text">United State</p>
                      </div>
                      <div className="profile__settings-item">
                        <button className="profile__settings-btn">
                          <img src="/images/profile/edit.svg" alt="" className="profile__settings-icon" />
                          E-mail:  
                        </button>
                        <p className="profile__settings-text">cufwjxb..nan02@sfirstmail.com</p>
                      </div>
                      <div className="profile__settings-item">
                        <button className="profile__settings-btn">
                          <img src="/images/profile/edit.svg" alt="" className="profile__settings-icon" />
                          Change password
                        </button>
                      </div>
                    </div>
                    <h2 className="profile__title">Bonuses and promo codes</h2>
                    <div className="profile__promo">
                      <div className="profile__promo-item">
                        <div className="profile__promo-icon"><img src="/images/profile/ticket.svg" alt="" /></div>
                        <div className="profile__promo-text">5% discount on first order.</div>
                        <div className="profile__promo-code">QY2731</div>
                        <button className="profile__promo-btn"><img src="/images/profile/copy.svg" alt="" /></button>
                      </div>
                      <div className="profile__promo-item">
                        <div className="profile__promo-icon"><img src="/images/profile/ticket.svg" alt="" /></div>
                        <div className="profile__promo-text">Free courier delivery of your order. </div>
                        <div className="profile__promo-code">GJ2189</div>
                        <button className="profile__promo-btn"><img src="/images/profile/copy.svg" alt="" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="profile__history">
                    <h2 className="profile__title">Order history</h2>
                    <div className="profile__history-main">
                      {/* <p className="profile__history-alert">You have no orders</p> */}
                      <div class="profile__history-top">
                        <div class="profile__history-imgs">
                          <div class="profile__history-img-box">
                            <img src="/images/profile/sneakers-mini.png" alt="" class="profile__history-img" />
                          </div>
                          <div class="profile__history-img-box">
                            <img src="/images/profile/iphone-mini.png" alt="" class="profile__history-img" />
                            <div class="profile__history-img-overlay">+4</div>
                          </div>
                        </div>
                        <div class="profile__history-info">
                          <p class="profile__history-text">
                            <img src="/images/profile/note.svg" alt="" class="profile__history-text-icon" />
                            Order created :
                            <span class="profile__history-date">14.02.2023</span>
                          </p>
                          <p class="profile__history-text">
                            <img src="/images/profile/dollar-square.svg" alt="" class="profile__history-text-icon" />
                            Payment :
                            <span class="profile__history-span">
                              <img src="/images/profile/doge.svg" alt="" class="profile__history-currency" />
                              <span class="profile__history-span">28,3155</span>
                              <span class="profile__history-span profile__history-span--small">≈</span>
                              <span class="profile__history-span">$1,342</span>
                            </span>
                          </p>
                          <p class="profile__history-text">
                            <img src="/images/profile/3d-square.svg" alt="" class="profile__history-text-icon" />
                            Shipping information
                          </p>
                          <ul class="profile__history-list">
                            <li class="profile__history-list-item">
                              <div class="profile__history-list-marker"></div>
                              Ivan Ivanov
                            </li>
                            <li class="profile__history-list-item">
                              <div class="profile__history-list-marker"></div>
                              Alte Mainzer G. 61, 60311 Frankfurt am Main
                            </li>
                            <li class="profile__history-list-item">
                              <div class="profile__history-list-marker"></div>
                              +4915256443386
                            </li>
                            <li class="profile__history-list-item">
                              <div class="profile__history-list-marker"></div>
                              mailgroupalfa410204@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="profile__history-divider"></div>
                      <div class="profile__history-bottom">
                        <p class="profile__history-status-text">Status:</p>
                        <div class="profile__history-status">
                          <p class="profile__history-order">
                            <span class="profile__history-order-text">
                              <span class="profile__history-order-icon"><img src="/images/profile/timer.svg"
                              alt="" class="" /></span>
                              Order processing
                            </span>
                            9:22 14.02.2023
                          </p>
                          <p class="profile__history-descr">
                            Sorting, packing and preparing for shipment
                          </p>
                          <a href="#" class="profile__history-btn">
                            <img src="/images/profile/chevron-light2.svg" alt="" class="profile__history-btn-icon" />
                            View shipping history
                          </a>
                          <p class="profile__history-delivery">
                            <img src="/images/profile/truck.svg" alt="" class="profile__history-delivery-icon" />
                            Delivery date :
                            <span class="profile__history-delivery-span">
                              February 21 - 24
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile__wallet">
                    <h2 className="profile__title">Wallet</h2>
                    <div className="profile__wallet-box">
                      <div className="profile__wallet-crypto">
                        <h3 className="profile__wallet-title"><span className="profile__wallet-icon"><img src="/images/profile/btc-dark.svg" alt="" /> </span>Cryptocurrency</h3>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/btc.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>BTC</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate profile__wallet-item-rate--red">1,92 %</p>
                          </div>
                        </div>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/tether.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>USDT</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate">1,92 %</p>
                          </div>
                        </div>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/ethereum.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>ETH</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate">1,92 %</p>
                          </div>
                        </div>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/monero.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>XMR</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate">1,92 %</p>
                          </div>
                        </div>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/lite.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>LTC</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate">1,92 %</p>
                          </div>
                        </div>
                        <div className="profile__wallet-item">
                          <div className="profile__wallet-item-info">
                            <div className="profile__wallet-item-main">
                              <img src="/images/profile/doge.svg" alt="" className="profile__wallet-item-icon" />
                              <p className="profile__wallet-item-value">0 <span>DOGE</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">28 216,50 <span>USD</span></p>
                          </div>
                          <div className="profile__wallet-item-action">
                            <div className="profile__wallet-item-btns">
                              <button className="profile__wallet-item-btn"><img src="/images/profile/import.svg" alt="" /></button>
                              <button className="profile__wallet-item-btn"><img src="/images/profile/export.svg" alt="" /></button>
                            </div>
                            <p className="profile__wallet-item-rate">1,92 %</p>
                          </div>
                        </div>
                      </div>
                      <div className="profile__wallet-calc">
                        <h3 className="profile__wallet-title"><span className="profile__wallet-icon"><img src="/images/profile/calc.svg" alt="" /> </span> Calculator</h3>
                        <form className="profile__wallet-form">
                          <input placeholder="100 eur" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">EUR</button>
                        </form>
                        <form className="profile__wallet-form">
                          <input placeholder="110.2510 usd" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">USD</button>
                        </form>
                        <form className="profile__wallet-form">
                          <input placeholder="0.0036 btc" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">BTC</button>
                        </form>
                        <form className="profile__wallet-form">
                          <input placeholder="110.1408 usdt" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">USDT</button>
                        </form>
                        <form className="profile__wallet-form">
                          <input placeholder="0.0523 eth" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">ETH</button>
                        </form>
                        <form className="profile__wallet-form">
                          <input placeholder="1.1428 ltc" type="text" className="profile__wallet-input" />
                          <button className="profile__wallet-submit">LTC</button>
                        </form>
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

    // if (!isMobile) return (
    //     <>
    //         <Navbar/>
    //         <main className="container">

    //         </main>
    //         <Footer/>
    //     </>
    // );

    // if (isMobile) return (
    //     <>
    //         <Navbar/>
    //         <main className="container">

    //         </main>
    //         <Footer/>
    //     </>
    // )
}

export default Profile