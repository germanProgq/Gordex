import { Accordion, AccordionActions, AccordionSummary, ButtonBase, List } from "@mui/material"

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useIsMobile from "../../../shared/hooks/useIsMobile.js";

import * as img from "./styles/img.js";
import "./styles/style.css" 

function ProductsAccordion({ AccordionName }) {
    const isMobile = useIsMobile(960);

    const putAppropriateIcon = ( AccordionName ) => {
        switch (AccordionName) {
            case "Sorting": return img.sortIcon;
            case "All Categories": return img.categoriesIcon;
            case "Brands": return img.brandsIcon;
            case "Price Range": return img.priceRangeIcon;
            case "Delivery": return img.deliveryIcon
            default: throw new Error("invalid accordion name at ProductsAccordion")
        }
    }

    return (
        <>
            <Accordion
                elevation={0}
                sx={{
                    background: "transparent",
                    "&.MuiAccordion-root::before": {
                        display: "none",
                        
                    }
                }}
                disableGutters
            >
                <AccordionSummary
                    expandIcon={<ExpandLessIcon/>}
                    sx={{
                        position: "relative",
                        minHeight: `${isMobile ? "0": "48px"}`,
                        height: `${isMobile ? "36px" : "48px"}`,
                        fontSize: "inherit",
                        "& .MuiAccordionSummary-content": {
                            justifyContent: "center"
                            
                        }
                    }}
                >
                    <img className="products-filter__icon" src={ putAppropriateIcon(AccordionName) } alt="" />
                    {AccordionName}
                </AccordionSummary>

                <AccordionActions
                    sx={{
                        padding: 0,
                        "&.MuiAccordionActions-root > *": {
                            margin: 0,
                        }
                    }}
                >
                    <List
                        component={"ul"}
                        className="accordion-option-list"
                        sx={{
                            background: "white",
                            borderRadius: 4,
                            width: "100%",
                            padding: "5px 25px 5px 33px",
                            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        
                        <li>
                            <ButtonBase disableRipple sx={{borderRadius: "4px"}}>Option</ButtonBase>
                        </li>
                        <li>
                            <ButtonBase disableRipple sx={{borderRadius: "4px"}}>Option</ButtonBase>
                        </li>
                        <li>
                            <ButtonBase disableRipple sx={{borderRadius: "4px"}}>Option</ButtonBase>
                        </li>

                    </List>
                </AccordionActions>
            </Accordion>
        </>
    )
}

export default ProductsAccordion