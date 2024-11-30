import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Outlet, useLocation, useNavigate } from "react-router"
import "./styles/payment.css"
import Navbar from "../../components/Navbar/Navbar"
// import Footer from "../../components/Footer/Footer"


function Payment() {
    const navigate = useNavigate();
    const location = useLocation();

    const currentLocation = location.pathname.split('/').at(-1);


    return (
        <>
            <Navbar/>
            <Stepper/>
            <Container
                className="container payment__main-content__container"
                component={"main"}
            >
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button 
                    sx={{
                        color: "inherit",
                        borderRadius: "6px"
                    }}
                    onClick={() => navigate(-1)}>Back</Button>
                    <Button 
                    sx={{
                        color: "inherit",
                        borderRadius:"6px"
                    }}
                    onClick={() => {
                        switch (currentLocation) {
                            case "shoppingCard": 
                                navigate(
                                    "/payment/checkout", 
                                    {
                                        state: {
                                            from: "shoppingCard"
                                        }
                                    }
                                )
                                break;
                            case "checkout":
                                navigate(
                                    "/payment/finish",
                                    {
                                        state: {
                                            from: "checkout"
                                        }
                                    }
                                )
                                break;
                            default:
                                break;
                        }
                    }}>Next</Button>
                </Box>
                <Outlet/>
            </Container>
            {/* <Footer/> */}
        </> 
    )
}

const Stepper = () => {
    const location = useLocation();
    const currentLocation = location.pathname.split('/').at(-1);

    const addCheckMarkClass = () => {
        const from = location.state && location.state.from;

        switch (from) {
            case null: return ""
            case "shoppingCard": return "shoppingCard";
            case "checkout": return "shoppingCard checkout";
            default:
                break;
        }
    }

    return (
        <Box className="payment__header">
            <Box className="payment__header__container">
                <Typography 
                    className={`payment__header-title ${currentLocation === "shoppingCard" ? "active" : ""}`}
                    variant="h1">SHOPPING CARD</Typography>
                <Typography 
                    className={`payment__header-title  ${currentLocation === "checkout" ? "active" : ""}`}
                    variant="h1">CHECKOUT</Typography>
                <Typography 
                    className={`payment__header-title last ${currentLocation === "finish" ? "active" : ""}`}
                    variant="h1">FINISH</Typography>

                <Divider className={`payment__progress ${currentLocation}`}/>

                <Box className={`payment__progress-checkmark ${currentLocation}`}>
                    <img src={'../../../../public/images/payment/checkIcon.svg'} alt="" />
                </Box>
                <Box className={`payment__progress-checkmark__done first ${addCheckMarkClass()}`}>
                    <img src={'../../../../public/images/payment/checkIcon.svg'} alt="" />
                </Box>
                <Box className={`payment__progress-checkmark__done second ${addCheckMarkClass()}`}>
                    <img src={'../../../../public/images/payment/checkIcon.svg'} alt="" />
                </Box>

            </Box>
            <Divider className="payment__backgroundLine"/>
            <Divider className={`payment__progress__finished ${currentLocation}`}/>

        </Box> 
    );
}

export default Payment