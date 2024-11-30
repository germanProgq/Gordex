// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import {useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./styles/style.css"
import { ProfileInfo } from "../../token/api"
import OrdersHistory from "./OrderHistory"

function Profile() {
  const [regDate, setRegDate] = useState('')
  const [country, setCountry] = useState('Unknown')
  const [email, setEmail] = useState('example@email.com')
  const [promos, setPromos] = useState([])
  const [orderHistory, setOrderHistory] = useState([])
  const [btc, setBtc] = useState(0)
  const [usdt, setUsdt] = useState(0)
  const [eth, setEth] = useState(0)
  const [xmr, setXmr] = useState(0)
  const [ltc, setLtc] = useState(0)
  const [doge, setDoge] = useState(0)

  const getProfileInfo = async () => {
    const response = await ProfileInfo()
    const profile_info = response.profile_info.data;
    const user_orders = response.user_orders.data;
    const user_currencies = response.user_currency.data;
    setUsdt(user_currencies.usdt)
    setBtc(user_currencies.btc)
    setEth(user_currencies.eth)
    setXmr(user_currencies.xmr)
    setLtc(user_currencies.ltc)
    setDoge(user_currencies.doge)
    setCountry(profile_info.country)
    setEmail(profile_info.email)
    setPromos(profile_info.promo)
    setOrderHistory(user_orders)
    
  }
  useEffect(() => {
    getProfileInfo() 
  }, [])

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
                        <p className="profile__settings-text">{country}</p>
                      </div>
                      <div className="profile__settings-item">
                        <button className="profile__settings-btn">
                          <img src="/images/profile/edit.svg" alt="" className="profile__settings-icon" />
                          E-mail:  
                        </button>
                        <p className="profile__settings-text">{email}</p>
                      </div>
                      <div className="profile__settings-item">
                        <button className="profile__settings-btn">
                          <img src="/images/profile/edit.svg" alt="" className="profile__settings-icon" />
                          Change password
                        </button>
                      </div>
                    </div>
                    <h2 className="profile__title">Bonuses and promo codes</h2>
                      {promos && promos.length > 0 && promos.map((promo, index) => (
                        <div className="profile__promo" key={index}>
                          <div className="profile__promo-item">
                            <div className="profile__promo-icon">
                              <img src={promo.icon} alt="" />
                            </div>
                            <div className="profile__promo-text">{promo.discount}</div>
                            <div className="profile__promo-code">{promo.code}</div>
                            <button className="profile__promo-btn">
                              <img src="/images/profile/copy.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="profile__history">
                    <h2 className="profile__title">Order history</h2>
                    {orderHistory && orderHistory.length > 0 ? (
                      <OrdersHistory orders={orderHistory} />
                    ) : (
                      <p>No orders found.</p>
                    )}
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
                              <p className="profile__wallet-item-value">{btc} <span>BTC</span></p>
                            </div>
                            <p className="profile__wallet-item-usd">0 <span>USD</span></p>
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
                              <p className="profile__wallet-item-value">{usdt} <span>USDT</span></p>
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
                              <p className="profile__wallet-item-value">{eth} <span>ETH</span></p>
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
                              <p className="profile__wallet-item-value">{xmr} <span>XMR</span></p>
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
                              <p className="profile__wallet-item-value">{ltc} <span>LTC</span></p>
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
                              <p className="profile__wallet-item-value">{doge} <span>DOGE</span></p>
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