import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { GetProductData } from "../../token/api";
import Base64Image from "../../base64ImgReturn";

const ProductItem = () => {
    const itemId = useParams().id
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [shipping, setShipping] = useState(null)
    const [images, setImages] = useState(null)
    const [colors, setColors] = useState(Array())
    const [config, setConfig] = useState('')
    const [description, setDescription] = useState('')

const FindItem = async () => {
    const imagesRes = []
    const res = await GetProductData(itemId)
    setName(res.title)
    setPrice(res.usd)
    setShipping(res.deliveryPrice)
    setColors(res.colors)
    setConfig(res.config)
    setDescription(res.description)
    
    const filesArray = JSON.parse(res.files); // Parse the files
    filesArray.forEach(file => {
        imagesRes.push(file.image); // Push each image string to imagesRes
    });
    
    setImages(imagesRes)
}
    useEffect(() => {
        console.log(itemId)
        FindItem()
    }, [])
    
    return (
        <Box className="product-info-desktop__container">
            <Typography className="product-title" variant="h2">{name}</Typography>
            <Typography className="product-price" variant="h4">{price}</Typography>

            <Box className="product-info-desktop__main">
                <Box className="product-info-desktop__images">
                    <Box className="product-info-desktop-img b white-box">
                        <img src={images?.main} alt="Product" />
                    </Box>
                    <Box className="product-info-desktop__images-left">
                        {images?.map((img, index) => (
                            <Box key={index} className="product-info-desktop-img s white-box">
                                <Base64Image base64String={img} alt="Product view" />
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
