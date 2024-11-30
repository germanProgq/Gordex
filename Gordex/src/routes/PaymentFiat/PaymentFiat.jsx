import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./styles/style.css"

function PaymentFiat() {

  return (
      <div className="wrapper">
        <Navbar/>
        <main className="main">
          <section className="pending">
            <div className="container pending__container">
              <div className="pending__top">
                <h2 className="pending__title">Order pending payment!</h2>
                <div className="pending__time">
                  <p className="pending__time-text">Complete the payment within</p>
                  <p className="pending__time-value">9:40</p>
                </div>
                <div className="pending__amount">
                  <p className="pending__amount-text">Payment amount</p>
                  <p className="pending__amount-value">$1.200</p>
                </div>
              </div>
              <form className="pending__form">
                <div className="pending__item">
                  <div className="pending__card">
                    <label className="pending__label">
                      <span className="pending__label-text">Country</span>
                      <input placeholder="United states of america" type="text" className="pending__input" />
                    </label>
                    <label className="pending__label">
                      <span className="pending__label-text">Name</span>
                      <input placeholder="Davis Smith" type="text" className="pending__input" />
                    </label>
                    <label className="pending__label">
                      <span className="pending__label-text">E-mail</span>
                      <input placeholder="youmail@com" type="email" className="pending__input" />
                    </label>
                    <div className="pending__label-group">
                      <label className="pending__label">
                        <span className="pending__label-text">City</span>
                        <input placeholder="New York" type="text" className="pending__input" />
                      </label>
                      <label className="pending__label">
                        <span className="pending__label-text">Zip code</span>
                        <input placeholder="77001" type="text" className="pending__input" />
                      </label>
                    </div>
                    <div className="pending__label-group">
                      <label className="pending__label">
                        <span className="pending__label-text">Address</span>
                        <input placeholder="542 W.14th Street" type="text" className="pending__input" />
                      </label>
                      <label className="pending__label">
                        <span className="pending__label-text">State</span>
                        <input placeholder="NY" type="text" className="pending__input" />
                      </label>
                    </div>
                  </div>
                  <div className="pending__text-box">
                    <p className="pending__text">Order number : <span className="pending__text-span">3214412</span></p>
                    <p className="pending__text">Date : <span className="pending__text-span">12.07.2024</span></p>
                  </div>
                </div>
                <div className="pending__item">
                  <div className="pending__card">
                    <div className="pending__bank">
                      <img src="/images/paymentFiat/bank.svg" alt="" className="pending__bank-img" />
                      <div className="pending__bank-info">
                        <h3 className="pending__bank-title">Bank card</h3>
                        <p className="pending__bank-text">MIR, Mastercard, Maestro, Visa, UnionPay, Amex</p>
                      </div>
                    </div>
                    <label className="pending__label">
                      <span className="pending__label-text">Name</span>
                      <input maxlength="16" placeholder="0000 0000 0000 0000" type="text" className="pending__input" />
                    </label>
                    <div className="pending__group">
                      <div className="pending__group-item">
                        <label htmlFor="expiration" className="pending__group-label">Expiration date</label>
                        <div className="pending__group-inputs">
                          <input id="expiration" maxlength="2" placeholder="MM" type="text" className="pending__group-input" />
                          /
                          <input maxlength="2" placeholder="YY" type="text" className="pending__group-input" />
                        </div>
                      </div>
                      <div className="pending__group-item">
                        <label htmlFor="cvv" className="pending__group-label">CVC</label>
                        <input maxlength="4" id="cvv" placeholder="****" type="text" className="pending__group-input" />
                      </div>
                    </div>
                    <img src="/images/paymentFiat/bank-logo.svg" alt="" className="pending__img" />
                  </div>
                  <button className="pending__submit">Pay</button>
                  <p className="pending__text">By paying, you accept the <a href="#" className="pending__text-link">bank's terms and conditions.</a></p>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );

}

export default PaymentFiat