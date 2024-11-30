import { Container, Typography } from "@mui/material"

function Partnership() {
    return (
        <>
            <Container 
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "310px",
                padding: "0 60px"
            }}
            className='info'>
                <img style={{marginRight: "30px"}} src="../../../../public/images/info/partnershipLeft.svg" alt="" />
                <Typography sx={{width: 580}} variant="body1" textAlign={"center"}>
                At the moment, due to geopolitical circumstances, cooperation with our online store on the franchise and API temporarily suspended. Retail and wholesale orders are available for you in our online store. 
                </Typography>
                <img style={{marginLeft: "60px"}} src="../../../../public/images/info/partnershipRight.svg" alt="" />
            </Container>
        </>
    )
}

export default Partnership