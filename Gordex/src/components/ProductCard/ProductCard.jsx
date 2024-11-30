import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import * as img from "./styles/img.js"
import style from "./styles/style.module.css"
import Base64Image, { Base64ImageWrapper } from "../../base64ImgReturn.jsx"

function ProductCard({title, usdPrice, tetherPrice, euroPrice, btcPrice, itemImgUrl }) {

    return (
        <Card className={`${style.productCard__container}`} elevation={1}>
            <Button className={`${style.productCard__star}`}><img src={img.starIcon} alt="" /></Button>

            <CardActionArea
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                }}
            >
                <CardMedia className={`${style.productCard__image}`} component={Base64ImageWrapper} base64String={itemImgUrl}/>

                <Box className={`${style.productCard__footer}`}>
                    <CardHeader className={`${style.productCard__title}`}
                        title={title}
                        titleTypographyProps={{
                            fontSize: 12,
                            fontWeight: 500
                        }}

                        subheader="Location: Thailand +1"
                        subheaderTypographyProps={{
                            fontSize: 11,
                    }}/>

                    <CardContent className={`${style.productCard__content}`}>

                        <Box className={`${style.productCard__price}`}>
                            <img src={img.dollarSignIcon} alt="" />
                            <Typography className={`${style.productCard__price__text}`}>{usdPrice}$</Typography>
                        </Box>
                        <Box className={`${style.productCard__price}`}>
                            <img src={img.tetherIcon} alt="" />
                            <Typography className={`${style.productCard__price__text}`}>{tetherPrice}$</Typography>
                        </Box>
                        <Box className={`${style.productCard__price}`}>
                            <img src={img.euroSignIcon} alt="" />
                            <Typography className={`${style.productCard__price__text}`}>{euroPrice}$</Typography>
                        </Box>
                        <Box className={`${style.productCard__price}`}>
                            <img src={img.bitCoinIcon} alt="" />
                            <Typography className={`${style.productCard__price__text}`}>{btcPrice}$</Typography>
                        </Box>

                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard