import { useState } from "react";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box } from "@mui/material"

import ProductsFilter from "../../components/ProductsFilter/ProductsFilter"
import Categories from "../Categories/Categories";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CatalogMobileIcon from "../../../public/images/catalog/catalogMobile.svg" 
import FilterIcon from "../../../public/images/catalog/filterMobileIcon.svg"

import style from "./styles/style.module.css"


function ProductsControllersMobile() {
    const [isAccordionOpened, setIsAccordionOpened] = useState(false);


    return (
        <Box className={`${style.controllers__container}`}>
            <Accordion
                className={`${style.productsFilter__accordion}`}
                expanded={isAccordionOpened}
                elevation={0}
                disableGutters
            >
                <Box
                    className={`${style.productsFilter__accordionButton}`}
                    onClick={() => setIsAccordionOpened(!isAccordionOpened)}
                    component={"button"} 
                >
                    <AccordionSummary className={`${style.productsFilter__accordionHeader}`} expandIcon={<ExpandLessIcon/>}>
                        <img  className={`${style.productsFilter__accordionHeader__img}`} src={FilterIcon} alt="filterIcon" />
                        Filter
                    </AccordionSummary>
                </Box>

                <AccordionDetails className={`${style.productsFilter__accordionContent}`}>
                    <ProductsFilter/>
                </AccordionDetails>
            </Accordion>

            <Accordion
                className={`${style.categories__accordion}`}
                disableGutters
                expanded={isAccordionOpened}
                elevation={0}
            >
                <Box
                    className={`${style.categories__accordionButton}`}
                    component={"button"}
                    onClick={() => setIsAccordionOpened(!isAccordionOpened)}
                >
                    <AccordionSummary className={`${style.categories__accordionHeader}`}
                        expandIcon={<ExpandLessIcon sx={{
                                    color: "#F6D456",
                                    transition: "0.2s",
                                }}
                            />}
                    >
                            <img className={`${style.categories__accordionImg}`} src={CatalogMobileIcon} alt="" />
                            Catalog
                    </AccordionSummary>
                </Box>

                <AccordionActions className={`${style.categories__accordionList}`}>
                    <Categories/>
                </AccordionActions>
            </Accordion>
        </Box>
    )
}

export default ProductsControllersMobile