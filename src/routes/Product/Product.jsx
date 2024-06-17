import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import useIsMobile from "../../shared/hooks/useIsMobile"
import "./styles/styleMobile.css"
import "./styles/styleDesktop.css"
import * as img from './styles/img.js';
import CloseIcon from '@mui/icons-material/Close';


const AdditionalInfoAccordion = ({title = "Title", text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}) => {
    return (
        <Accordion className="additional-info__accordion__container" disableGutters elevation={0}>
            <AccordionSummary 
                expandIcon={
                    <CloseIcon 
                        sx={{
                            color: "rgba(0,0,0,0.7)", 
                            transform: "rotate(45deg)", 
                            width: 20, 
                            height: "100%"
                        }}/>
                    }
                className="additional-info__accordion__header">
                    <div>
                        {title}
                    </div>
                    </AccordionSummary>
            <AccordionDetails className="additional-info__accordion__content">
                    {text}
            </AccordionDetails>
        </Accordion>
    );
}

function Product() {
    const isMobile = useIsMobile(960);

    if (!isMobile) return (
        <>
            <Navbar/>
            <main className="container product-page__main-content">
                <Box className="bread-crumbs-desktop">
                    Main / Catalog / Category / Brand
                </Box>
                <Typography className="product-title" variant="h1">Apple iPhone 14 Pro Max Gold</Typography>
                <Box className="product-info-desktop__container">
                    
                    <Box className="product-info-desktop__main">
                        <Box className="product-info-desktop__images">
                            <Box className="product-info-desktop__images-left">
                                <Box className="product-info-desktop-img s white-box">
                                    <img src={img.iphoneScreenImg} alt="" />
                                </Box>

                                <Box className="product-info-desktop-img s white-box">
                                    <img src={img.iphoneBackSideImg} alt=""/>
                                </Box>
                            </Box>

                            
                            <Box className="product-info-desktop-img b white-box">
                                <img src={img.iphoneImg} alt="" />
                            </Box>
                        </Box>

                    <Stack className="product-info-desktop__main-right">

                        <Box className="product-desktop__shipping">
                            <Box className="product-desktop__shipping-text__box white-box">
                                <Typography className="shipping-text__p" variant="body1">Shipping:</Typography>
                                <Typography className="shipping-text__p" variant="body1">Free</Typography>
                                <Typography className="shipping-text__p" variant="body1">International</Typography>
                                <Typography className="shipping-text__p" variant="body1">No Express</Typography>
                                <img src={img.questionIcon} alt="" />
                            </Box>
                            <Box className="product-desktop__shipping-brand white-box">
                                <Typography variant="body1">Brand:</Typography>
                                <img src={img.appleIcon} alt="" />
                            </Box>
                        </Box>

                        <Box className="product-desktop__other-colors">
                            <Typography variant="body1" className="product-desktop__other-colors__title">Other Colors</Typography>
                            <Box className="product-desktop__other-colors__list">
                                <Box className="other-colors__option white-box">
                                    <img src={img.violetPhone} alt="" />
                                </Box>
                                <Box className="other-colors__option white-box">
                                    <img src={img.blackPhone} alt="" />
                                </Box>
                                <Box className="other-colors__option white-box">
                                    <img src={img.whitePhone} alt="" />
                                </Box>
                            </Box>
                        </Box>

                        <Box className="product-desktop__config">
                            <Box className="product-desktop__config__header">
                                <Typography>Configuration</Typography>
                            </Box>

                            <Box className="product-desktop__config__list">
                                <Box className="product-desktop__config-item white-box">128GB</Box>
                                <Box className="product-desktop__config-item white-box">128GB</Box>
                                <Box className="product-desktop__config-item white-box">128GB</Box>
                                <Box className="product-desktop__config-item white-box">128GB</Box>
                            </Box>
                        </Box>

                    </Stack>

                    </Box>
                    

                    <Box className="product-info-desktop__secondary">

                        <Box className="product-info-desktop__additional-info">
                            <AdditionalInfoAccordion 
                                title={"Authenticity"}
                                text={"We guarantee the authenticity of each product in our store. In addition to checking for authenticity, our specialists check seams, zippers, assemblies, etc. Ordering in our store you can be sure that it will be a quality product without any defects."}
                            />
                            <AdditionalInfoAccordion/>
                            <AdditionalInfoAccordion/>
                        </Box>

                        <Box className="product-desktop__cryptocurrency">
                            <Box className="product-desktop__cryptocurrency__header">
                                <Typography className="product-desktop__cryptocurrency__title">Cryptocurrency</Typography>
                                <Box className="product-desktop__cryptocurrency--discounts">

                                </Box>
                            </Box>
                            <Box className="product-desktop__cryptocurrency__content">
                                {/* таблица */}
                            </Box>
                        </Box>

                        <Box className="product-desktop__actions">
                            {/* Кнопки */}
                        </Box>

                    </Box>

                    <Box className="youMayAlsoLike">
                        {/* лента */}
                    </Box>
                </Box>
            </main>
            <Footer/>
        </>
    );

    if (isMobile) return (
        <>
            <Navbar/>
            <main className="container product-page__main-content">

                <Box className="bread-crumbs">
                    Main / Catalog / Category / Brand
                </Box>

                <Box className="product-info">
                    <Typography variant="h1" className="product-info__title">Apple iPhone 14 Pro Max Gold</Typography>
                    <Box className="product-info__img">
                        <Box className="product-info__main-image white-box">
                            <img src={img.iphoneImg}/>
                        </Box>
                        <Box className="product-info__small-images">
                            <Box className="product-info__small-images-box white-box">
                                <img src={img.iphoneScreenImg}/>
                            </Box>
                            <Box className="product-info__small-images-box white-box">
                                <img src={img.iphoneScreenImg}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="product-info__footer">
                        <Box className="product-info__footer-more">
                            <Box className="product-info__footer-more-box">
                                Share
                                <img src={img.shareIcon}/>
                            </Box>
                            <Box className="product-info__footer-more-box sp">
                                Brand
                                <img src={img.appleIcon}/>
                            </Box>
                            <Box className="product-info__footer-more-box">
                                More 11
                                <img src={img.moreIcon}/>
                            </Box>
                        </Box>
                        <Box className="product-info__footer__shipping-info white-box">
                            <Typography className="product-info__footer-text">Shipping:</Typography>
                            <Typography className="product-info__footer-text">Free</Typography>
                            <Typography className="product-info__footer-text">International</Typography>
                            <Typography className="product-info__footer-text">No Express</Typography>
                            <img src={img.questionIcon}/>
                        </Box>
                    </Box>
                </Box>

                <Box className="other-colors">
                    <Typography className="other-colors__title">Other colors</Typography>
                    <Box className="other-colors__content">
                        <Box className="other-colors__item white-box">
                            <img src={img.violetPhone}/>
                        </Box>
                        <Box className="other-colors__item white-box">
                            <img src={img.blackPhone}/>
                        </Box>
                        <Box className="other-colors__item white-box">
                            <img src={img.whitePhone}/>
                        </Box>
                    </Box>
                </Box>
                <Box className="config">
                    <Typography className="config__title">Configuration</Typography>
                    <Box className="config__cards">
                        <Box className="white-box">128 GB</Box>
                        <Box className="white-box">256 GB</Box>
                        <Box className="white-box">512 GB</Box>
                        <Box className="white-box">1 TB</Box>
                    </Box>
                </Box>

                <Box className="crypto-currency">
                    <Box className="crypto-currency__header">
                        <Typography className="crypto-currency__title">Cryptocurrency</Typography>
                        <Box className="crypto-currency__discounts-icons">
                            <Box className="crypto-currency__discounts-bitcoin">-13%</Box>
                            <Box className="crypto-currency__discounts__plus">+</Box>
                            <Box className="crypto-currency__discounts-price">-5%</Box>
                            <img className="crypto-currency__discounts-bell"/>
                        </Box>
                    </Box>
                    
                    <Box className="crypto-currency__content white-box">
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                        <Box className="crypto-currency__card">
                            <img src={img.tetherIcon}/>
                            <Box className="crypto-currency__card-text">
                                <Typography>1,025 USDT</Typography>
                                <Typography><s>1,158 USDT</s></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="currency">
                    <Box className="currency__header">
                        <Typography className="currency__header-text">Currency</Typography>
                        <Box className="currency__header-discount-icon">-5%</Box>
                    </Box>
                    <Box className="currency__content">
                        <Box className="currency__content-prices white-box">
                            <Box className="currency__content-prices__card">
                                <img src={img.tetherIcon}/>
                                <Box className="currency__content-text">
                                    <Typography>1,025 USDT</Typography>
                                    <Typography><s>1,158 USDT</s></Typography>
                                </Box>
                            </Box>
                            <Box className="currency__content-prices__card">
                                <img src={img.tetherIcon}/>
                                <Box className="currency__content-text">
                                    <Typography>1,025 USDT</Typography>
                                    <Typography><s>1,158 USDT</s></Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Button id="add-to-card"
                            variant="contained"
                        >
                            Add to card
                            <img id="add-to-card__icon"/>
                        </Button>
                    </Box>

                </Box>

                <Box className="additional-info">
                    <Accordion>
                        <AccordionSummary
                            sx={{
                            }}
                            // title="Accordion"
                            color="#212121"
                        >Accordion</AccordionSummary>
                        <AccordionDetails>
                            Additional info
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box className="youMayAlsoLike"></Box>
            </main>
            <Footer/>
        </>
    )
}

export default Product