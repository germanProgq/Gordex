import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from "../../components/ProductCard/ProductCard.jsx";  
import 'swiper/css';
import style from "./styles/style.module.css";
import * as img from './styles/img.js'

import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';

function Root() {
    return (
        <>
            <Navbar/>
            <main>
                <section className={style.banner}>
                    <div className="container">
                        <div className={style.banners__inner}>
                            <a href="#"><img src={img.banner1}></img></a>
                            <a href="#"><img src={img.banner2}></img></a>
                        </div>
                    </div>
                </section>

                <section className={style.go}>
                    <div className={`container ${style.go__container}`}>
                        <h2 className={style.go__title}>Go to</h2>
                        <Swiper className={style.go__slider} modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={20} freeMode={true} breakpoints={{720: {spaceBetween: 24}}}>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-1.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>WEAR & SHOES</span>
                            </SwiperSlide>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-2.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>BAGS</span>
                            </SwiperSlide>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-3.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>ELECTRONIC</span>
                            </SwiperSlide>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-4.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>BRANDS</span>
                            </SwiperSlide>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-5.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>SALE</span>
                            </SwiperSlide>
                            <SwiperSlide tag='a' href="#" className={style.go__category}>
                                <img src="img/category-bg-6.png" alt="" className={style.discounts__cardPriceIcon}></img>
                                <span className={style.go__category}>BUYING UP</span>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className={style.discounts}>
                    <div className={`container ${style.discounts__container}`}>
                        <h2 className={style.discounts__title}>Discounts</h2>
                        <Swiper className={style.discounts__slider} modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={20} freeMode={true} breakpoints={{720: {spaceBetween: 24}}}>

                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                

                            {/* <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={style.discountSliderSlide}>
                                <a href="#" className={style.discounts__card}>
                                    <div className={style.discounts__cardRate}>
                                        -5%
                                    </div>
                                    <button className={style.discounts__cardFavorite}>
                                        <img src={img.favorite} alt="" />
                                    </button>
                                    <div className={style.discounts__cardTop}>
                                        <img src={img.product1} alt="" className={style.discounts__cardImg} />
                                        <div className={style.discounts__cardOverlay}>
                                            <p className={style.discounts__cardText}>Apple iPhone 14 Pro Max Gold</p>
                                        </div>
                                    </div>
                                    <div className={style.discounts__cardBottom}>
                                        <p className={style.discounts__cardLocation}>Location: Thailand +1</p>
                                        <div className={style.discounts__cardPrices}>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.dollar} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,025 $
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.euro} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,390 €
                                                </div>
                                            </div>
                                            <div className={style.discounts__cardPricesColumn}>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.tether} alt="" className={style.discounts__cardPriceIcon} />
                                                    1,080
                                                </div>
                                                <div className={style.discounts__cardPrice}>
                                                    <img src={img.bitcoin} alt="" className={style.discounts__cardPriceIcon} />
                                                    0,03393
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide> */}
                            

                        </Swiper>
                    </div>
                </section>

                <section className={style.banner}>
                    <div className="container">
                        <a href="#"><img src={img.banner3} alt=""></img></a>
                    </div>
                </section>

                <section className={style.discounts}>
                    <div className="container discounts__container">
                        <h2 className={style.discounts__title}>On trend</h2>
                        <Swiper className={style.discounts__slider} modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={20} freeMode={true} breakpoints={{720: {spaceBetween: 24}}}>

                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>

                <section className={style.brands}>
                    <div className={`container ${style.brands__container}`}>
                        <h2 className={style.brands__title}>Brands</h2>
                        <Swiper modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={10} freeMode={true}>

                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>

                <section className={style.banner}>
                    <div className="container">
                        <a href="#"><img src={img.banner3} alt=""></img></a>
                    </div>
                </section>

                <section className={style.referral}>
                    <div className="container referral__container">
                        <h2 className={style.referral__title}>Referral program<span className={style.referral__titleSpan}>. Convert profitably</span></h2>
                        <Swiper modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={10} freeMode={true} breakpoints={{720: {spaceBetween: 40}}}>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className={style.discounts}>
                    <div className="container discounts__container">
                        <h2 className={style.discounts__title}>Maximum benefit <span className={style.discounts__titleSpan}>when paying in cryptocurrency</span> </h2>
                        <Swiper className={style.discounts__slider} modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={20} freeMode={true} breakpoints={{720: {spaceBetween: 24}}}>

                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide style={{width: "auto"}}>
                                <ProductCard/>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>
            
                <section className={style.partner}>
                    <div className="container partner__container">
                        <h2 className={style.partner__title}>Partner advertising</h2>
                        <div className={style.partner__items}>
                            <div className={style.partner__item}>
                                <a className={style.partner__itemLink} href="#"><img src={img.poizon} alt="" className="partner__item-img"></img></a>
                                <p className={style.partner__itemText}>StockX</p>
                            </div>
                            <div className={style.partner__item}>
                                <a className={style.partner__itemLink} href="#"><img src={img.poizon} alt="" className="partner__item-img"></img></a>
                                <p className={style.partner__itemText}>Poizon</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>  
            <Footer/>   
        </>
    );
}

export default Root