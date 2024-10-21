import { Box, Button, Checkbox, Container, FormControlLabel, OutlinedInput, Stack, Typography } from "@mui/material"
import lockImg from "../../../public/images/login/lock-circle.svg";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as img from "./styles/img.js"
import "./styles/style.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthAccReq, CreateCaptcha, GetCaptchaImage, RegisterAccount } from "../../token/api.js";

function Login() {
    const [loginForm, setLoginForm] = useState("signUp");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [captcha, setCaptcha] = useState("");
    const [captchaImageUrl, setCaptchaImageUrl] = useState('');
    const navigate = useNavigate();

    const HandleCaptchaImgReq = async() => {
        const captcha_img = await GetCaptchaImage()
        return captcha_img
    };

    const handleCaptcha = async () => {
        const captcha_img = await HandleCaptchaImgReq();
        setCaptchaImageUrl(captcha_img);

        setTimeout(async () => {
            const refreshedCaptchaImg = await RefreshCaptcha();
            setCaptchaImageUrl(refreshedCaptchaImg);
        }, 45000);
    };

    const getCaptchaInfo = () => {
        const input_captcha = document.getElementById('captcha-input');
        const captcha_sumbit = input_captcha.value;
        if (captcha_sumbit) {
            RegisterAccount(email, password, captcha_sumbit);
            AuthAccReq(email, password, captcha_sumbit);
        } 

    }


    const SubmitForm = () => {
        if (loginForm === 'signUp') {
            if (repeatPass != password) {
                console.error("Passwords do not match")
            }
            else {
                handleCaptcha();           
            }

            

        }
        else if (loginForm === "signIn"){
            handleCaptcha();
        }
    }
    const captchaContainerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        zIndex: 1000,
    };

    const captchaImageStyle = {
        width: '100%',
        height: 'auto',
    };

    const captchaInputStyle = {
        border: '1px solid yellow',
        fontSize: '13px',
        height: '20%'
    };
    const captchaButtonSubmitStyle = {
        border: '1px solid yellow',
        background: 'yellow',
        fontSize: '13px',
        height: '20%'
    };
    
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
                                            onChange={(e) => {setEmail(e.target.value)}}
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="E-mail"
                                            type="email"
                                            startAdornment={<img className="sign-up__input-icon" src={img.userIcon} alt="" />}
                                            />
                                        <OutlinedInput
                                            onChange={(e) => {setPassword(e.target.value);}} 
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="Password"
                                            type="password"
                                            startAdornment={<img className="sign-up__input-icon" src={img.keyIcon} alt="" />}
                                            />
                                        <OutlinedInput 
                                            onChange={(e) => {setRepeatPass(e.target.value)}}
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
                                            type="submit"
                                            onClick={() => SubmitForm()}
                                        >Continue</Button>
                                    </form>
                                :
                                    <form id="sign-in">
                                        <OutlinedInput 
                                            onChange={(e) => {setEmail(e.target.value)}}
                                            className="sign-up__input"
                                            fullWidth 
                                            placeholder="E-mail"
                                            type="email"
                                            startAdornment={<img className="sign-up__input-icon" src={img.userIcon} alt="" />}
                                            />
                                        <OutlinedInput 
                                            onChange={(e) => {setPassword(e.target.value)}}
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
                                            type="submit"
                                            onClick={() => SubmitForm()}
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
                {captchaImageUrl && (
                    <div className="captcha-container" style={captchaContainerStyle}>
                        <img src={captchaImageUrl} alt="Captcha" style={captchaImageStyle} />
                        <input placeholder="Enter the symbols from Captcha" style={captchaInputStyle} id="captcha-input" onSubmit={getCaptchaInfo}></input>
                        <button type="submit" style={captchaButtonSubmitStyle}>Submit</button>
                    </div>
                )}
            </Container>
        </>
    )
}

export default Login