import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./styles/style.css"

function PaymentBasket() {

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
              <form className="pending__form pending__form--single">
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

export default PaymentBasket