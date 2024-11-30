import { Box, Button, Checkbox, Container, FormControlLabel, OutlinedInput, Stack, Typography } from "@mui/material"
import lockImg from "../../../public/images/login/lock-circle.svg";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as img from "./styles/img.js"
import "./styles/style.css"
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthAccReq, CreateCaptcha, GetCaptchaData, GetCaptchaImageUrl  , RegisterAccount } from "../../token/api.js";
import './captcha.css'
import { UserContext } from "../../token/provider.jsx";

function Login() {
    const [loginForm, setLoginForm] = useState("signUp");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const navigate = useNavigate();
    const { username, setUsername, token, setToken } = useContext(UserContext);
    const captcha = document.getElementById('captcha-container');
    const inputElement = document.getElementById('captcha-input');
    const [captchaData, setCaptchaData] = useState('');

    useEffect(() => {
        if (username) {
          navigate('/');
        }
      }, [username, navigate, setUsername]);
      
    const handleHideCaptcha = (e) => {

        if (!captcha.contains(e.target)) {

            captcha.classList.add('invisible-captcha');
            inputElement.value = ''
    
            // Remove the event listener to prevent further clicks from affecting it
            document.removeEventListener('click', handleHideCaptcha);
        }
    };

    const handleSubmitCaptcha = async (captchaData, email, password) => {
        captcha.classList.add('invisible-captcha');    
        document.removeEventListener('click', handleHideCaptcha);
        const captchaId = captchaData.id;
        const input = inputElement.value.toString();
        inputElement.value = ''

        if (loginForm == 'signIn') {
            const registerAccToken = await AuthAccReq(captchaId, email, password, input);
                setToken(registerAccToken);
                console.log(registerAccToken)
                setUsername(email)
                navigate('/')
        }
        else if (loginForm == 'signUp') {
            const registerAccStatus = await RegisterAccount(captchaId, email, password);
            if (registerAccStatus == 200) {
                setUsername(email)
                navigate('/')
            }
            
        }
    }
    

    
    const SubmitForm = () => {
        if (!email || !password) {
            return;
        }

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

    const handleCaptcha = async () => {
        try {
            await CreateCaptcha();

            const url = await GetCaptchaImageUrl()

            const img = new Image();
            img.src = url;
            const captchaImgPrev = document.getElementsByClassName('captcha-image')
            Array.from(captchaImgPrev).forEach((img) => {
                img.remove();
            })
            img.classList.add('captcha-image')

            captcha.classList.remove('invisible-captcha')
            captcha.classList.add('captcha-container')
            captcha.appendChild(img)
            

            document.addEventListener('click', handleHideCaptcha);      
            const captchaData = await GetCaptchaData()
            setCaptchaData(captchaData)
            
        } catch (error) {
            console.error('Error handling captcha:', error);
        }
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
            </Container>
            <div id="captcha-container" className="invisible-captcha">
                <input 
                    type="text" 
                    placeholder="Enter Captcha" 
                    className="captcha-input"
                    id="captcha-input"
                />
                <button 
                    className="captcha-button"
                    onClick={() => handleSubmitCaptcha(captchaData, email, password)}
                >
                    Submit
                </button>
            </div>
        </>
    )
}

export default Login