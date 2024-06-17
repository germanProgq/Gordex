import Navbar from "../../components/Navbar/Navbar"
import "./styles/finish.css"

function Finish() {
  
     return (
      <>
        <div className="wrapper">
          <Navbar/>
          <main className="main">
            <section className="finish-content">
              <div className="container">
                <div className="finish__wrapper">
                  <div className="finish__currencies">
                    <h3 className="finish__title">Dogecoin</h3>
                    <div className="finish__currency">
                      <img src="/images/finish/doge.svg" alt="" className="finish__currency-icon" />
                      <div className="finish__currency-info">
                        <p className="finish__currency-price">28 216,50 <span>USD</span></p>
                        <div className="finish__currency-rate">1,92 %</div>
                      </div>
                    </div>
                  </div>
                  <div className="finish__trans">
                    <h3 className="finish__title">Transaction amount </h3>
                    <div className="finish__trans-item">
                      <p className="finish__trans-text">A transfer in the amount of</p>
                      <div className="finish__trans-amount">2,784</div>
                    </div>
                    <div className="finish__trans-item">
                      <p className="finish__trans-text">At the address</p>
                      <div className="finish__trans-address">TD8LgjB7y39S7p7QTZe47Tznzi5YdNKfwf</div>
                    </div>
                  </div>
                  <div className="finish__status">
                    <h3 className="finish__title">Transaction status</h3>
                    <div className="finish__status-loader">
                      <img src="/images/finish/loader.png" alt="" className="finish__status-icon" />
                      <p className="finish__status-text">Waiting for transaction ...</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <Footer/> */}
        </div>
      </>
    )

    // if (isMobile) return (
    //     <>
    //       <div className="wrapper">
    //         <Navbar/>
    //         <main className="main">
    //           <div className="stepper">
    //             <div className="stepper--3"></div>
    //             <div className="stepper__bg"></div>
    //             <div className="stepper__step stepper__step--1">
    //                 <div className="stepper__label">Shopping cart</div>
    //                 <div className="stepper__indicator"><img src="/images/finish/stepper-icon.svg" alt="" className="stepper__icon" /></div>
    //             </div>
    //             <div className="stepper__step stepper__step--2">
    //                 <div className="stepper__label">Checkout</div>
    //                 <div className="stepper__indicator"><img src="/images/finish/stepper-icon.svg" alt="" className="stepper__icon" /></div>
    //             </div>
    //             <div className="stepper__step stepper__step--3">
    //                 <div className="stepper__label  stepper__label--active">Finish</div>
    //                 <div className="stepper__indicator"><img src="/images/finish/stepper-icon.svg" alt="" className="stepper__icon" /></div>
    //             </div>
    //           </div>

    //         </main>
    //         <Footer/>
    //       </div>
    //     </>
    // )
}

export default Finish