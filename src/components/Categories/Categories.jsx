import { useState } from "react"
import { Link, useLocation } from "react-router-dom";

import useIsMobile from "../../shared/hooks/useIsMobile";

import style from "./styles/style.module.css"

function Categories() {
    const isMobile = useIsMobile(960);
    const location = useLocation();
    const currentCategory = location.pathname.split("/")[2];
    const [category, setCategory] = useState(currentCategory);

    if (!isMobile) return (
            <div className={style.categories}>
                <div className={style.categories__inner}>
                    <ul className={style.categories__list}>
                        <li className={style.categories__listItem}>
                            <Link onClick={() => setCategory("electronic")} 
                            to={"/catalog/electronic"}
                            className={`${style.categories__listLink} ${category === "electronic" ? `${style.categories__listLink} ${style.active}` : ""}`}>Electronic</Link>
                        </li>
                        <li className={style.categories__listItem}>
                            
                            <Link onClick={() => setCategory("clothing")}
                            to={"/catalog/clothing"} 
                            className={`${style.categories__listLink} ${category === "clothing" ? `${style.categories__listLink} ${style.active}` : ""}`}>Clothing</Link>
                        </li>
                        <li className={style.categories__listItem}>
                            
                            <Link onClick={() => setCategory("shoes")} 
                            to={"/catalog/shoes"}
                            className={`${style.categories__listLink} ${category === "shoes" ? `${style.categories__listLink} ${style.active}` : ""}`}>Shoes</Link>
                        </li>
                        <li className={style.categories__listItem}>
                            
                            <Link onClick={() => setCategory("bags")} 
                            to={"/catalog/bags"}
                            className={`${style.categories__listLink} ${category === "bags" ? `${style.categories__listLink} ${style.active}` : ""}`}>Bags</Link>
                        </li>
                        <li className={style.categories__listItem}>
                            <Link onClick={() => setCategory("accessories")} 
                            to={"/catalog/accessories"}
                            className={`${style.categories__listLink} ${category === "accessories" ? `${style.categories__listLink} ${style.active}` : ""}`}>Accessories</Link>
                        </li>
                    </ul>
                    <a href="#" className={style.categories__link}>Wholesale</a>
                </div>
            </div>
        )


    if (isMobile) return (
        <>
                <Link
                    className={`${category === "electronic" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`}
                    onClick={() => setCategory("electronic")}
                    to={"/catalog/electronic"}>
                    Electronic
                </Link>
                <Link
                    className={`${category === "clothing" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`}
                    onClick={() => setCategory("clothing")}
                    to={"/catalog/clothing"}>
                    Clothing
                </Link>
                <Link
                    className={`${category === "shoes" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`}
                    onClick={() => setCategory("shoes")}
                    to={"/catalog/shoes"}>
                    Shoes
                </Link>
                <Link
                    className={`${category === "bags" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`} 
                    onClick={() => setCategory("bags")}
                    to={"/catalog/bags"}>
                    Bags
                </Link>
                <Link
                    className={`${category === "accessories" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`}
                    onClick={() => setCategory("accessories")}
                    to={"/catalog/accessories"}>
                    Accessories
                </Link>
                <Link
                    className={`${category === "wholesale" ? `${style.categoryMobile} ${style.active}` : `${style.categoryMobile}`}`}
                    onClick={() => setCategory("wholesale")}
                    to={"/catalog/wholesale"}>
                    Wholesale
                </Link>
        </>
    )

}

export default Categories