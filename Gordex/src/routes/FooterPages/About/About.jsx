import { Box, Typography } from "@mui/material"

function About() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: '30px',
                width: "100%"
            }}
        >
            <Box className='info'
                sx={{
                    padding: "20px"
                }}
            >
                <Typography variant='body1'>
                    Our online store offers only original branded merchandise, which we purchase from reliable suppliers and undergo strict quality checks. We are proud to have partnerships with such famous sites as StockX, Flightclub, Grailed, Poizon Oskelly, which guarantees our customers high quality products. <br /> <br />
                    We understand that in a world of fast-changing fashion and trends, it's important to be able to buy the products you want at any time. That is why we work around the clock and provide fast delivery all over the country. <br /> <br />
                    Besides we offer a unique opportunity to pay by cryptocurrency, which makes our online store even more convenient and profitable for users. Thanks to this perfect payment method, we can delight our customers with extremely pleasant prices with no tax and bank payment fees. Our company is registered in the UAE, which allows our customers to make profitable purchases without the risk of bypassing customs duties, VAT and other fees. We also offer bulk orders in a separate section of the website, which allows our customers to receive additional discounts when buying a large number of items. <br /> <br />
                    Our team consists of professionals who are always ready to help our clients in choosing goods and answer all their questions. We strive to ensure that each customer was satisfied with his/her purchase and returned to us again and again. <br /> <br />
                    We value our customers' trust and are ready to do everything possible to keep it. That is why we are always ready to solve any problems and questions that may arise when purchasing products in our online store. <br /> <br />
                    Thank you for choosing our online store! We hope that you will be satisfied with our services and products.
                </Typography>
            </Box>
            <Box className='info'
                sx={{
                    padding: "20px"
                }}
            >
                <Typography 
                sx={{
                    marginBottom: "20px"
                }}
                variant="body1"><b>Main storage room Bremen</b> (Germany)</Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <img src="../../../../public/images/info/storePhoto_1.jpg" alt="" />
                    <img src="../../../../public/images/info/storePhoto_2.jpg" alt="" />
                </div>
            </Box>
            <Box className='info'
                sx={{
                    padding: "20px"
                }}
            >
                <Typography sx={{ marginBottom: "20px" }} fontWeight={600} variant="body1">Contact</Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: "50%",
                        marginBottom: "20px"
                    }}
                >
                    <img src="../../../../public/images/info/emailIcon.svg" alt="" />
                    <img src="../../../../public/images/info/phoneIcon.svg" alt="" />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        width: "40%"
                    }}
                >
                    <Typography fontWeight={400} variant="body1">Social</Typography>
                    <img src="../../../../public/images/info/facebookMess.svg" alt="" />
                    <img src="../../../../public/images/info/facebookLogo.svg" alt="" />
                    <img src="../../../../public/images/info/telegram.svg" alt="" />
                    <img src="../../../../public/images/info/twitter.svg" alt="" />
                </div>
            </Box>
        </Box>
    )
}

export default About