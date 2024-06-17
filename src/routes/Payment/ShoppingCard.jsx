import "./styles/shoppingCard.css"

function ShoppingCard() {
    return (
        <div className="shopping">
            <div className="container">
                <div className="shopping__inner">
                    <div className="shopping__left">
                        <div className="shopping__address">
                            <h3 className="shopping__address-title">Billing Address <img src="/images/payment/circled-mark.svg" alt="" className="shopping__address-icon" /></h3>
                            <div className="shopping__address-box">
                                <form className="shopping__address-form">
                                    <label className="shopping__address-label shopping__address-label--single">
                                        <span className="shopping__address-label-span">Country</span> 
                                        <input placeholder="United states of america" type="text" className="shopping__address-input" />
                                    </label>
                                    <label className="shopping__address-label shopping__address-label--single">
                                        <span className="shopping__address-label-span">Name</span>
                                        <input placeholder="Davis Smith" type="text" className="shopping__address-input" />
                                    </label>
                                    <label className="shopping__address-label shopping__address-label--single">
                                        <span className="shopping__address-label-span">E-mail</span> 
                                        <input placeholder="youmail@com" type="text" className="shopping__address-input" />
                                    </label>
                                    <div className="shopping__address-label-box">
                                        <label className="shopping__address-label">
                                            <span className="shopping__address-label-span">City</span> 
                                            <input placeholder="New York" type="text" className="shopping__address-input" />
                                        </label>
                                        <label className="shopping__address-label">
                                            <span className="shopping__address-label-span">Zip code</span> 
                                            <input placeholder="77001" type="text" className="shopping__address-input" />
                                        </label>
                                    </div>
                                    <div className="shopping__address-label-box">
                                        <label className="shopping__address-label">
                                            <span className="shopping__address-label-span">Address</span>  
                                            <input placeholder="542 W.14th Street" type="text" className="shopping__address-input" />
                                        </label>
                                        <label className="shopping__address-label">
                                            <span className="shopping__address-label-span">State</span>  
                                            <input placeholder="NY" type="text" className="shopping__address-input" />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="shopping__payment">
                            <h3 className="shopping__payment-title">Select payment</h3>
                            <div className="shopping__payment-box">
                                <form className="shopping__payment-form">
                                    <label htmlFor="promo" className="shopping__payment-label">Promo code</label>
                                    <div className="shopping__payment-controls">
                                        <input id="promo" placeholder="GORDEX9915" type="text" className="shopping__payment-input" />
                                        <button className="shopping__payment-submit">Check</button>
                                    </div>
                                </form>
                                <h3 className="shopping__payment-box-title">Fiat currency <button className="shopping__payment-btn"><img src="/images/payment/bell.svg" alt="" /></button></h3>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">8,025 <span className="shopping__payment-amount-span">$</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">830 $</p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">110 $</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/euro.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">8,325 <span className="shopping__payment-amount-span">€</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">870 €</p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">104 €</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <h3 className="shopping__payment-box-title">Payment in cryptocurrency</h3>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/tether.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">7,432  <span className="shopping__payment-amount-span">USDT</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">1,190 <span className="shopping__payment-total-span">USDT</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/btc.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">1,239 <span className="shopping__payment-amount-span">BTC</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">0,0913  <span className="shopping__payment-total-span">BTC</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/ethereum.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">8,025 <span className="shopping__payment-amount-span">ETH</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">1,3120  <span className="shopping__payment-total-span">ETH</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/monero.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">19,3025  <span className="shopping__payment-amount-span">XMR</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">3,9012  <span className="shopping__payment-total-span">XMR</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/lite.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">21,0253  <span className="shopping__payment-amount-span">LTC</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">2,314  <span className="shopping__payment-total-span">LTC</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                                <div className="shopping__payment-item">
                                    <div className="shopping__payment-amount">
                                        <img src="/images/payment/doge.svg" alt="" className="shopping__payment-currency" />
                                        <div className="shopping__payment-amount-info">
                                            <p className="shopping__payment-amount-text">Amount</p>
                                            <p className="shopping__payment-amount-price">831,0253  <span className="shopping__payment-amount-span">DOGE</span></p>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-discount">
                                        <p className="shopping__payment-discount-text">Discount Counter</p>
                                        <div className="shopping__payment-discount-icons">
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/celo.svg" alt="" />
                                            </div>
                                            +
                                            <div className="shopping__payment-discount-icon">
                                                <img src="/images/payment/tag.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping__payment-total">
                                        <p className="shopping__payment-total-text">Total Discount</p>
                                        <p className="shopping__payment-total-price">20,3929 <span className="shopping__payment-total-span">DOGE</span></p>
                                    </div>
                                    <div className="shopping__payment-delivery">
                                        <p className="shopping__payment-delivery-text">Delivery</p>
                                        <p className="shopping__payment-delivery-price">FREE</p>
                                    </div>
                                    <a href="#" className="shopping__payment-link">Pay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping__right">
                        <div className="shopping__sum">
                            <h3 className="shopping__sum-title">Cart summary <img src="/images/payment/cart.svg" alt="" className="shopping__sum-title-icon" /></h3>
                            <div className="shopping__sum-items">
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart1.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart2.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                                <div className="shopping__sum-type">256gb</div>
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart3.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart4.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart5.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping__sum-item">
                                    <div className="shopping__sum-top">
                                        <div className="shopping__sum-name">Louis Vuitton Hoodie</div>
                                        <button className="shopping__sum-delete">Delete</button>
                                    </div>
                                    <div className="shopping__sum-main">
                                        <div className="shopping__sum-left">
                                            <div className="shopping__sum-img-box">
                                                <img src="/images/payment/cart6.png" alt="" className="shopping__sum-img" />
                                            </div>
                                            <div className="shopping__sum-money">
                                                <div className="shopping__sum-discount">
                                                    -5%
                                                    <div className="shopping__sum-icon"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                                <div className="shopping__sum-money-items">
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/dollar.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,025 <span className="shopping__sum-money-span">$</span></p>
                                                            <p className="shopping__sum-money-striked">0,0412</p>
                                                        </div>
                                                    </div>
                                                    <div className="shopping__sum-money-item">
                                                        <img src="/images/payment/euro.svg" alt="" className="shopping__sum-money-img" />
                                                        <div className="shopping__sum-money-info">
                                                            <p className="shopping__sum-money-price">1,390  <span className="shopping__sum-money-span">€</span></p>
                                                            <p className="shopping__sum-money-striked">1,158</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping__sum-right">
                                            <div className="shopping__sum-right-top">
                                            <div className="shopping__sum-discount shopping__sum-discount--large">
                                                -8%
                                                <div className="shopping__sum-icons">
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/celo.svg" alt="" /></div>
                                                    +
                                                    <div className="shopping__sum-icons-item"><img src="/images/payment/tag.svg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="shopping__sum-parameters">
                                                <div className="shopping__sum-type">S</div>
                                            </div>
                                            </div>
                                            <div className="shopping__sum-grid">
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/btc.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/tether.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/doge.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/monero.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/lite.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                                <div className="shopping__sum-grid-item">
                                                    <img src="/images/payment/ethereum.svg" alt="" className="shopping__sum-grid-img" />
                                                    <div className="shopping__sum-grid-info">
                                                        <p className="shopping__sum-grid-price">0,03393 <span className="shopping__sum-grid-span">BTC</span></p>
                                                        <p className="shopping__sum-grid-striked">1,158</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard