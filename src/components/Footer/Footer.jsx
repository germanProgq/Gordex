import "./styles/style.css"
import * as img from './styles/img.js'
import { Link } from "react-router-dom"

function Footer() {

    // Deleted container className

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__main-left">
                        <div className="footer__buyers">
                            <h3 className="footer__title">For Buyers</h3>
                            <ul className="footer__list footer__list--bordered">
                                <li className="footer__list-item"><Link to={"/info/returns"} className="footer__list-link">Refund</Link></li>
                                <li className="footer__list-item"><Link to={"/info/shipping"} className="footer__list-link">Delivery</Link></li>
                                <li className="footer__list-item"><Link to={"/info/"} className="footer__list-link">Guarantees</Link></li>
                                <li className="footer__list-item"><Link to={"/info/about"} className="footer__list-link">About Us</Link></li>
                                <li className="footer__list-item"><Link to={"/info/partnership"} className="footer__list-link">Cooperation</Link></li>
                            </ul>
                        </div>
                        <div className="footer__brands">
                            <ul className="footer__list">
                                <li className="footer__list-item"><Link to={"/info/brands"} className="footer__list-link">Brands</Link></li>
                                <li className="footer__list-item"><Link to={"/info/referral"} className="footer__list-link">Referral
                                        programs</Link>
                                </li>
                                <li className="footer__list-item"><Link to={"/info/rules"} className="footer__list-link">Terms of Use</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__partners">
                            <h3 className="footer__title">Partners</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item"><Link to={"/info/api"} className="footer__list-link">API</Link></li>
                                <li className="footer__list-item"><Link to={"/support"} className="footer__list-link">Support</Link></li>
                                <li className="footer__list-item"><Link to={"/info/authenticity"} className="footer__list-link">Guarantees</Link></li>
                                <li className="footer__list-item"><Link to={"/info/about"} className="footer__list-link">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__main-right">
                        <div className="footer__app">
                            <h3 className="footer__title">Download App</h3>
                            <a href="#" className="footer__app-link">
                                <img src={img.googlePlay} alt="" className="footer__app-img"></img>
                            </a>
                            <a href="#" className="footer__app-link">
                                <img src={img.appStore} alt="" className="footer__app-img"></img>
                            </a>
                        </div>
                        <div className="footer__logo">
                            <img src={img.gordexNameIcon} alt="" className="footer__logo-img"></img>
                            <p className="footer__logo-text">Here and now</p>
                        </div>
                    </div>
                </div>
                <div className="footer__copy">
                    <p className="footer__copy-text">© GORDEX, LLC 2018. All rights reserved </p>
                    <a href="#" className="footer__copy-text footer__copy-text--underlined">Privacy rules</a>
                    <a href="#" className="footer__copy-text footer__copy-text--underlined">Personal data processing
                        policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer