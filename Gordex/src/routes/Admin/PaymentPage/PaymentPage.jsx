import "./styles/style.css"

function PaymentPage() {
    return (
        <section className="payment">
            <div className="container payment__container">
              <div className="payment__mail">
                <div className="payment__mail-item">
                  <h2 className="payment__mail-title">Ключ для почты</h2>
                  <form className="payment__mail-form">
                    <input placeholder="0x1D80ACD1fC2******" type="text" className="payment__mail-input" />
                    <button type="button" className="payment__mail-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                        <path d="M12.875 6.99912C12.875 8.3265 11.8135 9.39912 10.5 9.39912C9.18645 9.39912 8.125 8.3265 8.125 6.99912C8.125 5.67175 9.18645 4.59912 10.5 4.59912C11.8135 4.59912 12.875 5.67175 12.875 6.99912Z" stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 13C13.9272 13 17.1214 11.4918 19.3447 8.88157C20.2184 7.85921 20.2184 6.14078 19.3447 5.11843C17.1214 2.50816 13.9272 1 10.5 1C7.07282 1 3.87864 2.50816 1.65534 5.11843C0.781553 6.14078 0.781553 7.85921 1.65534 8.88157C3.87864 11.4918 7.07282 13 10.5 13Z" stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="payment__mail-submit" type="submit">Сменить</button>
                  </form>
                </div>
                <div className="payment__mail-item">
                  <h2 className="payment__mail-title">Почта</h2>
                  <form className="payment__mail-form">
                    <input placeholder="0x1D80ACD1fC2******" type="text" className="payment__mail-input" />
                    <button type="button" className="payment__mail-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                        <path d="M12.875 6.99912C12.875 8.3265 11.8135 9.39912 10.5 9.39912C9.18645 9.39912 8.125 8.3265 8.125 6.99912C8.125 5.67175 9.18645 4.59912 10.5 4.59912C11.8135 4.59912 12.875 5.67175 12.875 6.99912Z" stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 13C13.9272 13 17.1214 11.4918 19.3447 8.88157C20.2184 7.85921 20.2184 6.14078 19.3447 5.11843C17.1214 2.50816 13.9272 1 10.5 1C7.07282 1 3.87864 2.50816 1.65534 5.11843C0.781553 6.14078 0.781553 7.85921 1.65534 8.88157C3.87864 11.4918 7.07282 13 10.5 13Z" stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="payment__mail-submit" type="submit">Сменить</button>
                  </form>
                </div>  
              </div>          
              <div className="payment__date">
                <h3 className="payment__date-title">Дата обновления :</h3>
                <div className="payment__date-items">
                  <div className="payment__date-item">
                    <img src="/images/admin/clock.svg" alt="clock" className="payment__date-icon" />
                    <p className="payment__date-value">12.04.2024</p>
                  </div>
                  <div className="payment__date-item">
                    <img src="/images/admin/clock.svg" alt="clock" className="payment__date-icon" />
                    <p className="payment__date-value">12.04.2024</p>
                  </div>
                  <div className="payment__date-item">
                    <img src="/images/admin/clock.svg" alt="clock" className="payment__date-icon" />
                    <p className="payment__date-value">12.04.2024</p>
                  </div>
                </div>
              </div>
              <div className="payment__main">
                <div className="payment__crypto">
                  <h3 className="payment__title">Крипто кошелек</h3>
                  <div className="payment__crypto-item">
                    <h3 className="payment__crypto-title">
                      <img src="/images/admin/tether.svg" alt="" className="payment__crypto-icon" />
                      USDT trc20
                    </h3>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                  </div>
                  <div className="payment__crypto-item">
                    <h3 className="payment__crypto-title">
                      <img src="/images/admin/bitcoin.svg" alt="" className="payment__crypto-icon" />
                      Bitcoin
                    </h3>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                  </div>
                  <div className="payment__crypto-item">
                    <h3 className="payment__crypto-title">
                      <img src="/images/admin/ethereum.svg" alt="" className="payment__crypto-icon" />
                      Ethereum
                    </h3>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                  </div>
                  <div className="payment__crypto-item">
                    <h3 className="payment__crypto-title">
                      <img src="/images/admin/monero.svg" alt="" className="payment__crypto-icon" />
                      Monero
                    </h3>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                    <form className="payment__crypto-form">
                      <input placeholder="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326OpafKK" type="text" className="payment__crypto-input" />
                      <button className="payment__crypto-btn" type="submit"><img src="/images/admin/refresh.svg" alt="" className="payment__crypto-btn-icon" /></button>
                    </form>
                  </div>
                </div>
                <div className="payment__system">
                  <h3 className="payment__title">Платежная система</h3>
                </div>
              </div>
            </div>
        </section>
    )
}

export default PaymentPage