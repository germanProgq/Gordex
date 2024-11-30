import Footer from '../../components/Footer/Footer';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import 'swiper/css';
import style from "./styles/style.module.css";
import * as img from './styles/img.js'

import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import SliderApiHelper from './SliderApiHelper.jsx';
import { useEffect, useState } from 'react';
import { GetCatalogsWithCategories } from '../../token/api.js';

function Root() {
    const [categories, setCategories] = useState([]);

    const handleScrollToCategory = (category) => {
        const element = document.getElementById(category);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

const getCategories = async () => {
    const response = await GetCatalogsWithCategories();
    
    // Use a Map to consolidate categories by catalog name
    const uniqueCategoriesMap = new Map();

    response.forEach(item => {
        if (!uniqueCategoriesMap.has(item.catalog)) {
            uniqueCategoriesMap.set(item.catalog, item);
        }
    });

    // Convert the Map back to an array
    const uniqueCategories = Array.from(uniqueCategoriesMap.values());
    
    setCategories(uniqueCategories);
}
    useEffect(() => {
        getCategories()
    }, [])
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
                            {categories.map((category, index) => (
                                <SwiperSlide key={index} tag='a' onClick={() => handleScrollToCategory(category.catalog)} className={style.go__category}>
                                    <img src={category.imgSrc} alt="" className={style.discounts__cardPriceIcon}></img>
                                    <span className={style.go__category}>{category.catalog}</span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                {categories.map((item, index) => (
                <div key={index}>
                    <SliderApiHelper category={item.catalog} />
                    <section className={style.banner}>
                        <div className="container">
                            <a href="#"><img src={img.banner3} alt=""></img></a>
                        </div>
                    </section>
                </div>
                ))}
            </main>  
            <Footer/>   
        </>
    );
}

export default Root