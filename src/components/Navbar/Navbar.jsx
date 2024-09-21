import "./styles/styles.css"
import * as img from "./styles/img.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Accordion, AccordionActions, AccordionSummary, Button, SwipeableDrawer } from '@mui/material';
import { SearchProducts } from "../../token/api.js";

const ELECTRONIC_LIST = [
    "Phones",
    "Graphics Cards",
    "Processors",
    "Game Consoles",
    "Virtual Reality",
    "Headphones",
    "Electronic Clock",
]

const CLOTHING_LIST = [
    "Outerwear",
    "T-shirt",
    "Sweatshirts",
    "Sweaters",
    "Shirts",
    "Fleece Clothes",
    "Shorts",
    "Pants",
    "Hats",
    "Socks",
]

function Navbar() {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [searchWord, setSearchWord] = useState('');

    const toggleDrawer = () => setDrawerOpened(!drawerOpened);

    const handleSearchInput = (event) => {
        const search_word = event.target.value;
        setSearchWord(search_word);
        handleFindSearch()
        
    };

    const handleFindSearch = async() => {
        const result = await SearchProducts(searchWord)
        
    }


    return (
        <nav className="header">
            <div className="container header__container">
                <div className="header__inner">
                    <nav className="nav">
                        <button 
                            onClick={toggleDrawer}
                            className="nav__burger-menu">
                            <img src={img.burgerIcon} alt="" className="nav__burger-menu-icon"></img>
                        </button>

                        <SwipeableDrawer
                            id="drawer"
                            anchor="left"
                            open={drawerOpened}
                            onClose={toggleDrawer}
                            onOpen={toggleDrawer}
                        >
                            <DrawerAccordion title="Electronic">
                                <ul className="drawerAccordion-ul">
                                    {
                                        ELECTRONIC_LIST.map((item, index) => 
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )}
                                </ul>
                            </DrawerAccordion>

                            <DrawerAccordion title="Clothing">
                                <ul className="drawerAccordion-ul">
                                    {
                                        CLOTHING_LIST.map((item, index) => 
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )}
                                </ul>
                            </DrawerAccordion>

                            <DrawerAccordion
                                title={"Shoes"}
                            >
                                    
                            </DrawerAccordion>
                            <DrawerAccordion
                                title={"Bags"}
                            >

                            </DrawerAccordion>
                            <DrawerAccordion
                                title={"Accessories"}
                            >

                            </DrawerAccordion>
                            <DrawerAccordion
                                title={"Calculator"}
                            >

                            </DrawerAccordion>

                            <Button>
                                Favorites
                            </Button>
                            <Button>
                                Login
                            </Button>
                            <Button>
                                Feedback
                            </Button>
                        </SwipeableDrawer>

                        <Link to={"/"} className="nav__logo">
                            <img className="nav__logo-img" src={img.logoIcon} alt=""></img>
                            <img className="nav__logo-img" src={img.logoText} alt=""></img>
                        </Link>
                        <div className="nav__catalog">
                            <img src={img.catalogIcon} alt="" className="nav__catalog-icon"></img>
                            Catalog
                            <div className="nav__catalog-list-wrapper">
                                <ul className="nav__catalog-list">
                                    <li className="nav__catalog-list-item">
                                        <h3 className="nav__catalog-title">Electronic</h3>
                                        <ul className="nav__catalog-sublist">
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Phones</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Graphics Cards</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Processors</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Game Consoles</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Virtual Reality</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Headphones</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/electronic"} className="nav__catalog-sublist-link">Electronic Clock</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav__catalog-list-item">
                                        <h3 className="nav__catalog-title">Clothing</h3>
                                        <ul className="nav__catalog-sublist">
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Outerwear</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">T-shirts</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Sweatshirt</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Sweaters</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Shirts</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Fleece Clothes</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Shorts</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Pants</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Hats</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/clothing"} className="nav__catalog-sublist-link">Socks</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav__catalog-list-item">
                                        <h3 className="nav__catalog-title">Shoes</h3>
                                        <ul className="nav__catalog-sublist">
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/shoes"} className="nav__catalog-sublist-link">Boots</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/shoes"} className="nav__catalog-sublist-link">Sneakers</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/shoes"} className="nav__catalog-sublist-link">Slipper</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/shoes"} className="nav__catalog-sublist-link">Sandals</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav__catalog-list-item">
                                        <h3 className="nav__catalog-title">Bags</h3>
                                        <ul className="nav__catalog-sublist">
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/bags"} className="nav__catalog-sublist-link">Women's handbags</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/bags"} className="nav__catalog-sublist-link">Backpacks</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/bags"} className="nav__catalog-sublist-link">Sports bags</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/bags"} className="nav__catalog-sublist-link">Shoulder Bags</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/bags"} className="nav__catalog-sublist-link">Belt Bag</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav__catalog-list-item">
                                        <h3 className="nav__catalog-title">Accessories</h3>
                                        <ul className="nav__catalog-sublist">
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/accessories"} className="nav__catalog-sublist-link">Watches</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/accessories"} className="nav__catalog-sublist-link">Wallets</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/accessories"} className="nav__catalog-sublist-link">Glasses</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/accessories"} className="nav__catalog-sublist-link">Belts</Link>
                                            </li>
                                            <li className="nav__catalog-sublist-item">
                                                <Link to={"/catalog/accessories"} className="nav__catalog-sublist-link">Jewelry</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="nav__catalog-banner">
                                    <h3 className="nav__catalog-banner-title">Wholesale</h3>
                                    <img src="img/nav-banner.png" alt="navbanner" className="nav__catalog-banner-img"></img>
                                </div>
                            </div>
                        </div>
                        <form className="nav__searchbar">
                            <div className="nav__input-box">
                                <img src={img.searchIcon} className="nav__input-icon"></img>
                                <input className="nav__input" placeholder="Search by brand, name, etc." type="text" onChange={handleSearchInput}></input>
                            </div>
                            <button className="nav__input-submit" type="submit" onClick={handleFindSearch}>Search</button>
                        </form>
                    </nav>
                    <div className="header__right">
                        <div className="header__btns">
                            <div className="header__lang-btn">
                                <img src={img.langIcon} alt="" className="header__btn-icon"></img>
                                <div className="header__lang-menu-wrapper">
                                    <div className="header__lang-menu">
                                        <h3 className="header__lang-menu-title"><img src={img.languageMenuIcon} alt=""
                                                className="header__lang-menu-icon"></img>Change Language</h3>
                                        <ul className="header__lang-menu-list">
                                            <li className="header__lang-menu-item">
                                                <a href="#" className="header__lang-menu-link">
                                                    <img src={img.ukIcon} alt="" className="header__lang-menu-img">
                                                    </img>English
                                                </a>
                                            </li>
                                            <li className="header__lang-menu-item">
                                                <a href="#" className="header__lang-menu-link">
                                                    <img src={img.spainIcon} alt="" className="header__lang-menu-img">
                                                    </img>Español
                                                </a>
                                            </li>
                                            <li className="header__lang-menu-item">
                                                <a href="#" className="header__lang-menu-link">
                                                    <img src={img.germanyIcon} alt="" className="header__lang-menu-img">
                                                    </img>Deutsch
                                                </a>
                                            </li>
                                            <li className="header__lang-menu-item">
                                                <a href="#" className="header__lang-menu-link">
                                                    <img src={img.franceIcon} alt="" className="header__lang-menu-img">
                                                    </img>Français
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="header__calc-btn">
                                <img src={img.calcIcon} alt="" className="header__btn-icon"></img>
                                <div className="header__calc-menu-wrapper">
                                    <div className="header__calc-menu-left">
                                        <h3 className="header__calc-menu-title">Exchange rate</h3>
                                        <ul className="header__calc-menu-left-list">
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-1.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">0.08984 $</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent--red">-1.334 %</p></li>
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-2.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">16349.4 $</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent--green">+0.1225 %</p></li>
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-3.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">30419.4 $</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent--red">-1.334 %</p></li>
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-4.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">1.001$</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent">+0 %</p></li>
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-5.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">2103.03 $</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent--red">-0.6637%</p></li>
                                            <li className="header__calc-menu-left-list-item"><img src="img/rate-6.svg" alt="" className="header__calc-menu-left-list-img"></img><p className="header__calc-menu-left-list-price">96.36$</p><p className="header__calc-menu-left-percent header__calc-menu-left-percent--red">-0.67 %</p></li>
                                        </ul>
                                    </div>
                                    <div className="header__calc-menu-right">
                                        <h3 className="header__calc-menu-title">Calculator</h3>
                                        <ul className="header__calc-menu-right-list">
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">100 eur</div><div className="header__calc-menu-right-list-currency">EUR</div></li>
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">110.2510 usd</div><div className="header__calc-menu-right-list-currency">USD</div></li>
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">0.0036 btc</div><div className="header__calc-menu-right-list-currency">BTC</div></li>
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">110.1408 usdt</div><div className="header__calc-menu-right-list-currency">USDT</div></li>
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">0.0523 eth</div><div className="header__calc-menu-right-list-currency">ETH</div></li>
                                            <li className="header__calc-menu-right-list-item"><div className="header__calc-menu-right-list-value">1.1428 ltc</div><div className="header__calc-menu-right-list-currency">LTC</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="header__heart-btn">
                                <img src={img.starIcon} alt="" className="header__btn-icon"></img>
                            </div>
                            <div className="header__basket-btn">
                                <img src={img.bagIcon} alt="" className="header__btn-icon--mobile"></img>
                            </div>
                        </div>
                        <Link to="/login" className="header__login">
                            Login
                            <img src={img.userSquare} alt="" className="header__login-icon"></img>
                        </Link>
                        <Link to="/login" className="header__login-mobile">
                            <img src={img.loginIcon} alt="" className="header__login-icon--mobile"></img>
                            {/* <img src="img/user2.svg" alt="" className="header__login-icon--mobile"></img> */}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}



const DrawerAccordion = ({ title, children }) => {
    return (
        <Accordion 
            elevation={0}
            disableGutters
            className="drawer-accordion">
            <AccordionSummary
                className="drawer-accordion__header"
                expandIcon={<img src={img.accordionArrow}/>}
            >
                    <img className="drawer-accordion__start-icon" src={img.accordionStartIcon} alt="" />
                    { title }
            </AccordionSummary>
            <AccordionActions
                className="drawer-accordion__actions"
            >
                { children }
            </AccordionActions>
        </Accordion>
    );
}

export default Navbar