import { Box, Button, Checkbox, Container, FormControlLabel, OutlinedInput, Stack, Typography } from "@mui/material"
import lockImg from "../../../public/images/login/lock-circle.svg";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as img from "./styles/img.js"
import "./styles/style.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { CreateCaptcha } from "../../apiService.js";
import { useEffect } from "react";

function Login() {
    const [loginForm, setLoginForm] = useState("signUp");
    const navigate = useNavigate();

    useEffect(()=> {
        console.log(CreateCaptcha())

    }, [])
    
    return (
        <>
            <header className="login__header">
                <Box>
                    <img src={lockImg} alt="lock-pic" />
                    <Typography variant="body2">URL verification:</Typography>
                    <Typography 
                    color={"#1BA27A"}
                    variant="body2">https://accounts.gordex.com</Typography>
                </Box>
            </header>
            <Container component={"main"} className="main-content">
                <Button 
                    onClick={() => navigate('/')}
                    startIcon={<img className="main-content__buttons-icon left" src={img.backIcon}/>}
                    className="main-content__buttons"
                    variant="text" 
                    color="inherit"
                >Home page</Button>
                <Box className="login-content">
                    
                    <Stack className="login__connect-to-wallet login__content-item">
                        <Stack className="login__connect-to-wallet__main login-container">
                            <form>
                                <Button className="login__connect-to-wallet__btn" disableElevation variant="contained">Connect to wallet</Button>
                                <FormControlLabel 
                                className="connect-to-wallet__checkbox__label" 
                                control={
                                    <Checkbox
                                        icon={<CircleOutlinedIcon/>}
                                        checkedIcon={<CheckCircleIcon sx={{color: "#f7c100"}}/>}
                                    />
                                } 
                                label="By connecting my wallet, I agree to the Terms of Use, cookie policy and privacy policy."/>
                            </form>

                            <Typography 
                            sx={{
                                fontSize: "11px",
                                fontWeight: 600,
                                textTransform: "uppercase"
                            }}  
                            variant="body1">Decentralized wallet login - WEB3</Typography>
                            <Box className="connect-to-wallet__icon-list">
                                <img src={img.dollarIcon} alt="" />
                                <img src={img.euroIcon} alt="" />
                                <img src={img.dogecoinIcon} alt="" />
                                <img src={img.zcashIcon} alt="" />
                                <img src={img.bitcoinIcon} alt="" />
                                <img src={img.leafIcon} alt="" />
                                <img src={img.etheriumIcon} alt="" />
                                <img src={img.eosIcon} alt="" />
                                <img src={img.zcoinblueIcon} alt="" />
                                <img src={img.cardanoBlueIcon} alt="" />
                                <img src={img.binanceIcon} alt="" />
                                <img src={img.litecoinIcon} alt="" />
                            </Box>
                        </Stack>
                        <Stack className="login__connect-to-wallet__footer">
                            <Box className="login__footer-item upper">
                                <img 
                                className="login__footer-item__icon"
                                src={img.cupIcon} alt="" />
                                The leading international online store on blockchain. Enjoy secure, profitable and confidential transactions with every purchase.</Box>
                            <Box className="login__footer-item lower">
                                <img 
                                className="login__footer-item__icon"
                                src={img.rankingIcon} alt="" />
                                Favorable prices and great discounts. Due to the absence of taxes for buying and selling when paying with cryptocurrency.</Box>
                        </Stack>
                    </Stack>


                    <Stack className="login__login-window login__content-item">
                        <Stack className="login__login-window__main login-container">
                            <Box className="login-window__switch-buttons">
                                <Button
                                    className={`login-window__switch-buttons-item ${loginForm === "signUp" ? "active" : ""}`}
                                    onClick={() => setLoginForm("signUp")}
                                    variant="text" 
                                    disableElevation 
                                    disableRipple 
                                    sx={{"&:hover": {background: "none"}}}
                                >Sign up</Button>
                                <Button 
                                    className={`login-window__switch-buttons-item ${loginForm === "signIn" ? "active" : ""}`}
                                    onClick={() => setLoginForm("signIn")}
                                    variant="text" 
                                    disableElevation 
                                    disableRipple 
                                    sx={{"&:hover": {background: "none"}}}
                                >Sign in</Button>
                            </Box>
                            {
                                loginForm === "signUp" ?
                                    <form id="sign-up">
                                        <OutlinedInput 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="E-mail"
                                            type="email"
                                            startAdornment={<img className="sign-up__input-icon" src={img.userIcon} alt="" />}
                                            />
                                        <OutlinedInput 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="Password"
                                            type="password"
                                            startAdornment={<img className="sign-up__input-icon" src={img.keyIcon} alt="" />}
                                            />
                                        <OutlinedInput 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="Repeat password"
                                            type="password"
                                            startAdornment={<img className="sign-up__input-icon" src={img.keyIcon} alt="" />}
                                            />

                                        <FormControlLabel
                                            className="sign-up__remember-password"
                                            sx={{userSelect: "none"}}
                                            control={
                                                <Checkbox
                                                    icon={<CircleOutlinedIcon/>}
                                                    checkedIcon={<CheckCircleIcon sx={{color: "#f7c100"}}/>}
                                                />
                                            }
                                            label="Remember password"
                                        />

                                        <Button
                                            disableElevation
                                            id="continue__button"
                                        >Continue</Button>
                                    </form>
                                :
                                    <form id="sign-in">
                                        <OutlinedInput 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="E-mail"
                                            type="email"
                                            startAdornment={<img className="sign-up__input-icon" src={img.userIcon} alt="" />}
                                            />
                                        <OutlinedInput 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="Password"
                                            type="password"
                                            startAdornment={<img className="sign-up__input-icon" src={img.keyIcon} alt="" />}
                                            />
                                        <FormControlLabel
                                        className="sign-up__remember-password"
                                        sx={{userSelect: "none"}}
                                        control={
                                            <Checkbox
                                                icon={<CircleOutlinedIcon/>}
                                                checkedIcon={<CheckCircleIcon sx={{color: "#f7c100"}}/>}
                                            />
                                        }
                                        label="Remember password"
                                        />
                                        
                                        <Button
                                            disableElevation
                                            id="continue__button"
                                        >Continue</Button>
                                    </form>
                            }
                        </Stack>
                        <Stack className="login__login-window__footer">
                            <Box className="login__footer-item upper">
                                <img 
                                className="login__footer-item__icon"
                                src={img.medalStarIcon} alt="" />
                                Thanks to De-Fi technologies, you can make deposits and transfers of cryptocurrency within the platform.</Box>
                            <Box className="login__footer-item lower">
                                <img 
                                className="login__footer-item__icon"
                                src={img.rankingIcon} alt="" />
                                Thanks to De-Fi technologies, you can make deposits and transfers of cryptocurrency within the platform.</Box>
                        </Stack>
                    </Stack>
                </Box>
                <Button 
                endIcon={<img className="main-content__buttons-icon right" src={img.lockIcon}/>}
                className="main-content__buttons"
                variant="text" 
                color="inherit">Restore password</Button>
            </Container>
        </>
    )
}

export default Login