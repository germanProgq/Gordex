import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import useIsMobile from "../../shared/hooks/useIsMobile"
import "./styles/style.css"
import style from "./styles/style.module.css";
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';

function ProductNew() {
  const isMobile = useIsMobile(1200);

  const AdditionalInfoAccordion = ({title = "Title", text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}) => {
    return (
      <Accordion className="product__accordion-container" disableGutters elevation={0}>
        <AccordionSummary 
          expandIcon={<CloseIcon sx={{color: "rgba(0,0,0,0.7)", transform: "rotate(45deg)", width: 20, height: "100%"}}/>}
          className="product__accordion-header">
          <div>
            {title}
          </div>
        </AccordionSummary>
        <AccordionDetails className="product__accordion-content">
          {text}
        </AccordionDetails>
      </Accordion>
    );
  }

  if (!isMobile) return (
      <div className="wrapper">
        <Navbar/>
        <main className="main">
          <section className="product">
            <div className="container">
              <nav className="product__breadcrumbs">Main / Catalog / Category / Brand</nav>
              <div className="product__title">Apple iPhone 14 Pro Max Gold</div>
              <div className="product__wrapper">
                <div className="product__main">
                  <div className="product__gallery">
                    <div className="product__gallery-action">
                      <div className="product__gallery-thumbnail">
                        <img src="/images/product/iphone-1.png" alt="" className="product__gallery-thumbnail-img" />
                      </div>
                      <div className="product__gallery-thumbnail">
                        <img src="/images/product/iphone-2.png" alt="" className="product__gallery-thumbnail-img" />
                      </div>
                      <button className="product__gallery-btn">More 11</button>
                    </div>
                    <div className="product__gallery-main">
                      <div className="product__gallery-img-box">
                        <img src="/images/product/iphone-3.png" alt="" className="product__gallery-img" />
                        <button className="product__gallery-fav-btn"><img src="/images/product/star.svg" alt="" className="product__gallery-fav-icon" /></button>
                        <p className="product__gallery-discount">-15%</p>
                      </div>
                    </div>
                  </div>
                  <div className="product__accordion">
                    <AdditionalInfoAccordion 
                        title={"Authenticity"}
                        text={"We guarantee the authenticity of each product in our store. In addition to checking for authenticity, our specialists check seams, zippers, assemblies, etc. Ordering in our store you can be sure that it will be a quality product without any defects."}
                    />
                    <AdditionalInfoAccordion title="Payment" />
                    <AdditionalInfoAccordion title="Shipping" />
                  </div>
                </div>
                <div className="product__info">
                  <div className="product__shipping">
                    <div className="product__shipping-main">
                      <p className="product__shipping-text">Shipping:</p>
                      <p className="product__shipping-text"><span className="product__shipping-marker"></span> Free</p>
                      <p className="product__shipping-text"><span className="product__shipping-marker"></span> International</p>
                      <p className="product__shipping-text"><span className="product__shipping-marker"></span> No Express</p>
                      <a href="#" className="product__shipping-link"><img src="/images/product/question.svg" alt="" className="product__shipping-icon" /></a>
                    </div>
                    <div className="product__shipping-brand">
                      Brand: <a href="#" className="product__shipping-link"><img src="/images/product/apple.svg" alt="" className="product__shipping-img" /></a>
                    </div>
                  </div>
                  <form className="product__form">
                    <div className="product__form-colors">
                      <p className="product__form-text">Other Colors</p>
                      <div className="product__form-label-box">
                        <label className="product__form-label">
                          <input className="product__form-radio" name="color" type="radio" />
                          <div className="product__form-color"><img src="/images/product/color-1.png" alt="" className="product__form-color-img" /></div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="color" type="radio" />
                          <div className="product__form-color"><img src="/images/product/color-2.png" alt="" className="product__form-color-img" /></div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="color" type="radio" />
                          <div className="product__form-color"><img src="/images/product/color-3.png" alt="" className="product__form-color-img" /></div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="color" type="radio" />
                          <div className="product__form-color"><img src="/images/product/color-1.png" alt="" className="product__form-color-img" /></div>
                        </label>
                      </div>
                    </div>
                    <div className="product__form-configs">
                      <p className="product__form-text">Configuration</p>
                      <div className="product__form-label-box">
                        <label className="product__form-label">
                          <input className="product__form-radio" name="config" type="radio" />
                          <div className="product__form-config">128 GB</div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="config" type="radio" />
                          <div className="product__form-config">256 GB</div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="config" type="radio" />
                          <div className="product__form-config">512 GB</div>
                        </label>
                        <label className="product__form-label">
                          <input className="product__form-radio" name="config" type="radio" />
                          <div className="product__form-config">1 TB</div>
                        </label>
                      </div>
                    </div>
                    <div className="product__currency">
                      <div className="product__currency-crypto">
                        <div className="product__currency-bar">
                          <h3 className="product__currency-title">Cryptocurrency</h3>
                          <div className="product__currency-discounts">
                            <div className="product__currency-discount">-15% <div className="product__currency-icon"><img src="/images/product/celo.svg" alt="" /></div></div>
                            +
                            <div className="product__currency-discount">-5% <div className="product__currency-icon"><img src="/images/product/tag.svg" alt="" /></div></div>
                          </div>
                          <button type="button" className="product__currency-alert">
                            <img src="/images/product/bell.svg" alt="" />
                            <div className="product__currency-alert-content">
                              <div className="product__currency-alert-item">
                                <div className="product__currency-alert-icon"><img src="/images/product/celo.svg" alt="" /></div>
                                <p className="product__currency-alert-text">Discount when paying with cryptocurrency.</p>
                              </div>
                              <div className="product__currency-alert-item">
                                <div className="product__currency-alert-icon"><img src="/images/product/tag.svg" alt="" /></div>
                                <p className="product__currency-alert-text">Discount when paying with fiat currency.</p>
                              </div>
                              <div className="product__currency-alert-item">
                                <div className="product__currency-alert-icon product__currency-alert-icon--dark"><img src="/images/product/percent.svg" alt="" /></div>
                                <p className="product__currency-alert-text">When paying with cryptocurrency, the discounts are summarized</p>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="product__currency-crypto-box">
                          <div className="product__currency-item">
                            <img src="/images/product/tether.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">1,025 <span className="product__currency-span">USDT</span></h3>
                              <p className="product__currency-old-price">1,158</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/doge.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">1,3944 <span className="product__currency-span">DOGE</span></h3>
                              <p className="product__currency-old-price">1,9281</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/lite.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">0,1842 <span className="product__currency-span">LTC</span></h3>
                              <p className="product__currency-old-price">0,2152</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/btc.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">0,0325 <span className="product__currency-span">BTC</span></h3>
                              <p className="product__currency-old-price">0,0412</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/monero.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">0,8104 <span className="product__currency-span">XMR</span></h3>
                              <p className="product__currency-old-price">0,8633</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/ethereum.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">3,0412 <span className="product__currency-span">ETH</span></h3>
                              <p className="product__currency-old-price">3,7019</p>
                            </div>
                          </div>
                        </div>
                        <div className="product__action">
                          <button type="button" className="product__action-btn">Buy fast <img src="/images/product/shopping-cart.svg" alt="" className="product__action-icon" /></button>
                          <button type="button" className="product__action-btn">Add to cart <img src="/images/product/bag.svg" alt="" className="product__action-icon" /></button>
                        </div>
                      </div>
                      <div className="product__currency-fiat">
                        <div className="product__currency-bar">
                          <h3 className="product__currency-title">Currency</h3>
                          <div className="product__currency-discount">-5% <div className="product__currency-icon"><img src="/images/product/tag.svg" alt="" /></div></div>
                        </div>
                        <div className="product__currency-fiat-box">
                          <div className="product__currency-item">
                            <img src="/images/product/dollar.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">1,335 $</h3>
                              <p className="product__currency-old-price">1,386 $</p>
                            </div>
                          </div>
                          <div className="product__currency-item">
                            <img src="/images/product/euro.svg" alt="" className="product__currency-img" />
                            <div className="product__currency-info">
                              <h3 className="product__currency-price">1,390 €</h3>
                              <p className="product__currency-old-price">1,430 €</p>
                            </div>
                          </div>
                        </div>
                        <a href="#" className="product__link">Share <img src="/images/product/share.svg" alt="" className="product__link-icon" /></a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className={style.discounts}>
            <div className={`container ${style.discounts__container}`}>
              <h2 className={style.discounts__title}>You may also like</h2>
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
        </main>
        <Footer/>
      </div>
  );

  if (isMobile) return (
      <div className="wrapper">
          <Navbar/>
          <main className="main">
            <section className="product">
              <div className="container">
                <nav className="product__breadcrumbs">Main / Catalog / Category / Brand</nav>
                <div className="product__title">Apple iPhone 14 Pro Max Gold</div>
                <div className="product__wrapper">
                  <div className="product__main">
                    <div className="product__gallery">
                      <div className="product__gallery-img-box">
                        <img src="/images/product/iphone-3.png" alt="" className="product__gallery-img" />
                        <button className="product__gallery-fav-btn"><img src="/images/product/star.svg" alt="" className="product__gallery-fav-icon" /></button>
                        <p className="product__gallery-discount">-15%</p>
                      </div>
                      <div className="product__gallery-thumbnail">
                        <img src="/images/product/iphone-1.png" alt="" className="product__gallery-thumbnail-img" />
                      </div>
                      <div className="product__gallery-thumbnail">
                        <img src="/images/product/iphone-2.png" alt="" className="product__gallery-thumbnail-img" />
                      </div>
                    </div>
                    <div className="product__action">
                      <div className="product__action-main">
                        <a href="#" className="product__link">Share <img src="/images/product/share.svg" alt="" class="product__link-icon"></img></a>
                        <div className="product__link">Brand: <img src="/images/product/apple-light.svg" alt="" class="product__link-icon"></img></div>
                      </div>
                      <button class="product__gallery-btn">More 11</button>
                    </div>
                  </div>
                  <div className="product__info">
                    <div className="product__shipping">
                      <div className="product__shipping-main">
                        <p className="product__shipping-text">Shipping:</p>
                        <p className="product__shipping-text"><span className="product__shipping-marker"></span> Free</p>
                        <p className="product__shipping-text"><span className="product__shipping-marker"></span> International</p>
                        <p className="product__shipping-text"><span className="product__shipping-marker"></span> No Express</p>
                      </div>
                    </div>
                    <form className="product__form">
                      <div className="product__form-colors">
                        <p className="product__form-text">Other Colors</p>
                        <div className="product__form-label-box">
                          <label className="product__form-label">
                            <input className="product__form-radio" name="color" type="radio" />
                            <div className="product__form-color"><img src="/images/product/color-1.png" alt="" className="product__form-color-img" /></div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="color" type="radio" />
                            <div className="product__form-color"><img src="/images/product/color-2.png" alt="" className="product__form-color-img" /></div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="color" type="radio" />
                            <div className="product__form-color"><img src="/images/product/color-3.png" alt="" className="product__form-color-img" /></div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="color" type="radio" />
                            <div className="product__form-color"><img src="/images/product/color-1.png" alt="" className="product__form-color-img" /></div>
                          </label>
                        </div>
                      </div>
                      <div className="product__form-configs">
                        <p className="product__form-text">Configuration</p>
                        <div className="product__form-label-box">
                          <label className="product__form-label">
                            <input className="product__form-radio" name="config" type="radio" />
                            <div className="product__form-config">128 GB</div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="config" type="radio" />
                            <div className="product__form-config">256 GB</div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="config" type="radio" />
                            <div className="product__form-config">512 GB</div>
                          </label>
                          <label className="product__form-label">
                            <input className="product__form-radio" name="config" type="radio" />
                            <div className="product__form-config">1 TB</div>
                          </label>
                        </div>
                      </div>
                      <div className="product__currency">
                        <div className="product__currency-crypto">
                          <div className="product__currency-bar">
                            <h3 className="product__currency-title">Cryptocurrency</h3>
                            <div className="product__currency-discounts">
                              <div className="product__currency-discount">-15% <div className="product__currency-icon"><img src="/images/product/celo.svg" alt="" /></div></div>
                              +
                              <div className="product__currency-discount">-5% <div className="product__currency-icon"><img src="/images/product/tag.svg" alt="" /></div></div>
                            </div>
                            <button type="button" className="product__currency-alert">
                              <img src="/images/product/bell-yellow.svg" alt="" />
                              <div className="product__currency-alert-content">
                                <div className="product__currency-alert-item">
                                  <div className="product__currency-alert-icon"><img src="/images/product/celo.svg" alt="" /></div>
                                  <p className="product__currency-alert-text">Discount when paying with cryptocurrency.</p>
                                </div>
                                <div className="product__currency-alert-item">
                                  <div className="product__currency-alert-icon"><img src="/images/product/tag.svg" alt="" /></div>
                                  <p className="product__currency-alert-text">Discount when paying with fiat currency.</p>
                                </div>
                                <div className="product__currency-alert-item">
                                  <div className="product__currency-alert-icon product__currency-alert-icon--dark"><img src="/images/product/percent.svg" alt="" /></div>
                                  <p className="product__currency-alert-text">When paying with cryptocurrency, the discounts are summarized</p>
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className="product__currency-crypto-box">
                            <div className="product__currency-item">
                              <img src="/images/product/tether.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">1,025 <span className="product__currency-span">USDT</span></h3>
                                <p className="product__currency-old-price">1,158</p>
                              </div>
                            </div>
                            <div className="product__currency-item">
                              <img src="/images/product/doge.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">1,3944 <span className="product__currency-span">DOGE</span></h3>
                                <p className="product__currency-old-price">1,9281</p>
                              </div>
                            </div>
                            <div className="product__currency-item">
                              <img src="/images/product/lite.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">0,1842 <span className="product__currency-span">LTC</span></h3>
                                <p className="product__currency-old-price">0,2152</p>
                              </div>
                            </div>
                            <div className="product__currency-item">
                              <img src="/images/product/btc.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">0,0325 <span className="product__currency-span">BTC</span></h3>
                                <p className="product__currency-old-price">0,0412</p>
                              </div>
                            </div>
                            <div className="product__currency-item">
                              <img src="/images/product/monero.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">0,8104 <span className="product__currency-span">XMR</span></h3>
                                <p className="product__currency-old-price">0,8633</p>
                              </div>
                            </div>
                            <div className="product__currency-item">
                              <img src="/images/product/ethereum.svg" alt="" className="product__currency-img" />
                              <div className="product__currency-info">
                                <h3 className="product__currency-price">3,0412 <span className="product__currency-span">ETH</span></h3>
                                <p className="product__currency-old-price">3,7019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product__currency-fiat">
                          <div className="product__currency-bar">
                            <h3 className="product__currency-title">Currency</h3>
                            <div className="product__currency-discount">-5% <div className="product__currency-icon"><img src="/images/product/tag.svg" alt="" /></div></div>
                          </div>
                          <div className="product__currency-main">
                            <div className="product__currency-fiat-box">
                              <div className="product__currency-item">
                                <img src="/images/product/dollar.svg" alt="" className="product__currency-img" />
                                <div className="product__currency-info">
                                  <h3 className="product__currency-price">1,335 $</h3>
                                  <p className="product__currency-old-price">1,386 $</p>
                                </div>
                              </div>
                              <div className="product__currency-item">
                                <img src="/images/product/euro.svg" alt="" className="product__currency-img" />
                                <div className="product__currency-info">
                                  <h3 className="product__currency-price">1,390 €</h3>
                                  <p className="product__currency-old-price">1,430 €</p>
                                </div>
                              </div>
                            </div>
                            <div className="product__currency-btns">
                              <button className="product__currency-btn">Add to cart <img src="/images/product/bag.svg" alt="" className="product__currency-btn-icon" /></button>
                              <button className="product__currency-btn">Buy fast <img src="/images/product/shopping-cart.svg" alt="" className="product__currency-btn-icon" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="product__accordion">
                    <AdditionalInfoAccordion 
                      title={"Authenticity"}
                      text={"We guarantee the authenticity of each product in our store. In addition to checking for authenticity, our specialists check seams, zippers, assemblies, etc. Ordering in our store you can be sure that it will be a quality product without any defects."}
                    />
                    <AdditionalInfoAccordion title="Payment" />
                    <AdditionalInfoAccordion title="Shipping" />
                  </div>
                </div>
              </div>
            </section>
            <section className={style.discounts}>
            <div className={`container ${style.discounts__container}`}>
              <h2 className={style.discounts__title}>You may also like</h2>
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
          </main>
          <Footer/>
      </div>
  )
}

export default ProductNew