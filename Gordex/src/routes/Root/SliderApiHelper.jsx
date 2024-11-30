import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import ProductCard from "../../components/ProductCard/ProductCard.jsx";  
import style from "./styles/style.module.css"; // Ensure this imports your styles
import { useState } from 'react';
import { GetProductList } from '../../token/api.js';
import { useNavigate } from 'react-router';

const SliderApiHelper = ({ category }) => {
    const navigate = useNavigate()
    const categoryStyle = style[category]; // Access dynamic style
    const sliderStyle = style[`${category}__slider`]; // Access dynamic slider style
    const [products, setProducts] = useState([]);

    const handleItemClick = (product) => {
        if (product)
        navigate(`/products/${product.id}`)        
    }

    const fetchProducts = async () => {
        const productInfoByCategory = await GetProductList(category, null, null)
        console.log(productInfoByCategory)
        setProducts(productInfoByCategory)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if ( !products || products?.length === 0) {
        return <>
        <div
        className={`container ${categoryStyle}__container`} id={category}>

            <h2 className={sliderStyle}>{category.toUpperCase()}</h2> {/* Use the provided title */}            
            <p>
                Nothing Found for category {category}
            </p>

        </div>
        </>
    }

    return (
        <section className={categoryStyle}>
            <div className={`container ${categoryStyle}__container`} id={category}>
                <h2 className={categoryStyle}>{category.toUpperCase()}</h2>
                <Swiper className={sliderStyle} modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={20} freeMode={true} breakpoints={{720: {spaceBetween: 24}}}>
                    {products?.map((product, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }} onClick={() => handleItemClick(product)}>
                            <ProductCard title={product.title} usdPrice={product.usd} tetherPrice={product.usdt} euroPrice={product.euro} btcPrice={product.btc} itemImgUrl={JSON.parse(product.files)[0].image}/> {/* Pass the product to ProductCard */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderApiHelper;