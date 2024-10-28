import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ProductItem = ({ name, price, images, description, shipping, brand, config, colors }) => {
    return (
        <Box className="product-info-desktop__container">
            <Typography className="product-title" variant="h2">{name}</Typography>
            <Typography className="product-price" variant="h4">{price}</Typography>

            <Box className="product-info-desktop__main">
                <Box className="product-info-desktop__images">
                    <Box className="product-info-desktop-img b white-box">
                        <img src={images.main} alt="Product" />
                    </Box>
                    <Box className="product-info-desktop__images-left">
                        {images.others.map((img, index) => (
                            <Box key={index} className="product-info-desktop-img s white-box">
                                <img src={img} alt="Product view" />
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Stack className="product-info-desktop__main-right">
                    <Box className="product-desktop__shipping">{shipping}</Box>
                    <Box className="product-desktop__other-colors">{colors}</Box>
                    <Box className="product-desktop__config">{config}</Box>
                </Stack>
            </Box>

            <Box className="product-info-desktop__additional-info">
                <Accordion className="additional-info__accordion__container">
                    <AccordionSummary expandIcon={<CloseIcon />} className="additional-info__accordion__header">
                        Authenticity
                    </AccordionSummary>
                    <AccordionDetails className="additional-info__accordion__content">
                        {description}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default ProductItem;
