import { AppBar, Box, Button, Divider, Drawer, Icon, IconButton, List, ListItem, Toolbar, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import leaveIcon from "../../../../public/images/admin/leave.svg"
import "./styles/style.css"

import { useState } from 'react';

const AdminButton = styled(Button)(() => ({
    textTransform: "none",
    color: "#72838C",
    borderRadius: "12px",
    "&:hover": {
        color: "#212121",
    },
}))


function AdminNavbar({children}) {
    const [activeButton, setActiveButton] = useState("0");
    const navigate = useNavigate();

    const buttonClickHandler = (page) => {
        setActiveButton(page)
        switch (page) {
            case "0": navigate("/admin/metrics")
                break;
            case "1": navigate("/admin/editor");
                break;
            case "2": navigate("/admin/goods")
                break;
            case "3": navigate("/admin/payment")
                break;
            case "4": navigate("/admin/users")
                break;
            
            default: throw new Error("invalid page in AdminPanel")
        }
    }

    return (
        <Box>
            <AppBar 
                position='fixed'
                sx={{
                    "&.MuiAppBar-root": {
                        zIndex: 1500
                    }
                }}
            >
                <Toolbar
                    sx={{
                        backgroundColor: "#2A2D34",
                        height: 70,
                        display: "flex",
                        justifyContent: "space-between",

                        "&.MuiToolbar-root": {
                            padding: "0 25px 0 90px"
                        }
                    }}
                >
                    <Typography>ADMIN PANEL</Typography>
                    <Box
                        backgroundColor={"white"}
                        sx={{
                            height: 45,
                            width: 200,
                            borderRadius: 3.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 10px 0 25px"
                        }}
                    >
                        
                        <Typography
                            color={'black'}
                        >Сайт: gordex.js</Typography>


                        <IconButton>
                            <img src={leaveIcon}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                sx={{
                    
                    "& .MuiDrawer-paper": {
                        width: "160px",
                        paddingTop: "70px",
                    }
                }}
            >
                <Toolbar
                    sx={{
                        "&.MuiToolbar-root": { padding: 0 } 
                    }}
                >
                    <List>
                        <ListItem>
                            <AdminButton 
                            disableRipple
                            className={activeButton === "0" ? "active" : "unactive"} 
                            onClick={() => buttonClickHandler("0")} variant='text' startIcon=
                            {
                                <MetricsIcon isActive={activeButton === "0" ? true : false}/>
                            }>Метрика</AdminButton>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <AdminButton 
                            disableRipple
                            className={activeButton === "1" ? "active" : "unactive"} 
                            onClick={() => buttonClickHandler("1")} variant='text' startIcon=
                            {
                                <BrushIcon isActive={activeButton === "1" ? true : false}/>
                            }>Редактор</AdminButton>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <AdminButton 
                            disableRipple
                            className={activeButton === "2" ? "active" : "unactive"} 
                            onClick={() => buttonClickHandler("2")} variant='text' startIcon=
                            {
                                <ShopAddIcon isActive={activeButton === "2" ? true : false}/>
                            }>Товары</AdminButton>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <AdminButton 
                            disableRipple
                            className={activeButton === "3" ? "active" : "unactive"} 
                            onClick={() => buttonClickHandler("3")} variant='text' startIcon=
                            {
                                <WalletIcon isActive={activeButton === "3" ? true : false}/>
                            }>Оплата</AdminButton>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <AdminButton 
                            disableRipple
                            className={activeButton === "4" ? "active" : "unactive"} 
                            onClick={() => buttonClickHandler("4")} variant='text' startIcon=
                            {
                                <UserAddIcon isActive={activeButton === "4" ? true : false}/>
                            }>Пользователи</AdminButton>
                        </ListItem>
                    </List>
                    
                </Toolbar>
            </Drawer>
            <main style={{padding: "70px 0 0 160px"}}>
                { children }
            </main>
        </Box>
    )
}

const MetricsIcon = ({isActive}) => {
    return (
        <Icon sx={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M18.0565 5.79297C17.5232 3.98464 16.0148 2.4763 14.2065 1.94297C12.8315 1.54297 11.8815 1.5763 11.2232 2.06797C10.4315 2.65964 10.3398 3.7263 10.3398 4.48464V6.55964C10.3398 8.60964 11.2732 9.6513 13.1065 9.6513H15.4982C16.2482 9.6513 17.3232 9.55964 17.9148 8.76797C18.4232 8.11797 18.4648 7.16797 18.0565 5.79297Z" fill="#72838C"/>
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M15.7556 11.1325C15.5389 10.8825 15.2222 10.7408 14.8972 10.7408H11.9139C10.4472 10.7408 9.25556 9.54915 9.25556 8.08248V5.09915C9.25556 4.77415 9.1139 4.45748 8.8639 4.24082C8.62223 4.02415 8.2889 3.92415 7.97223 3.96582C6.0139 4.21582 4.2139 5.29081 3.0389 6.90748C1.85556 8.53248 1.42223 10.5158 1.79723 12.4991C2.3389 15.3658 4.63056 17.6575 7.50556 18.1991C7.9639 18.2908 8.42223 18.3325 8.88056 18.3325C10.3889 18.3325 11.8472 17.8658 13.0889 16.9575C14.7056 15.7825 15.7806 13.9825 16.0306 12.0241C16.0722 11.6991 15.9722 11.3741 15.7556 11.1325Z" fill="#72838C"/>
            </svg>
        </Icon>
    )
}
const BrushIcon = ({isActive}) => {
    return (
        <Icon sx={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M13.49 1.66748H6.50671C3.47337 1.66748 1.66504 3.47581 1.66504 6.50915V13.4841C1.66504 16.5258 3.47337 18.3341 6.50671 18.3341H13.4817C16.515 18.3341 18.3234 16.5258 18.3234 13.4925V6.50915C18.3317 3.47581 16.5234 1.66748 13.49 1.66748ZM8.74004 13.9341C8.45671 14.2175 8.08171 14.4091 7.62337 14.4675L6.49837 14.5925C5.88171 14.6591 5.35671 14.1341 5.42337 13.5091L5.54837 12.3758C5.65671 11.3675 6.49837 10.7258 7.39004 10.7091C7.47337 10.7008 7.57337 10.7091 7.66504 10.7175C8.05671 10.7675 8.43171 10.9508 8.74837 11.2591C9.05671 11.5675 9.23171 11.9341 9.28171 12.3091C9.29004 12.4008 9.29837 12.4925 9.29837 12.5758C9.29837 13.0925 9.10671 13.5675 8.74004 13.9341ZM14.5317 6.29248C13.9317 7.79248 12.5567 9.75915 11.2484 11.0425C11.0567 9.85915 10.115 8.92581 8.91504 8.75915C10.1984 7.44248 12.1817 6.05081 13.69 5.44248C13.9567 5.34248 14.2234 5.41748 14.39 5.58415C14.5567 5.76748 14.64 6.02581 14.5317 6.29248Z" fill="#72838C"/>
            </svg>
        </Icon>
    )
}
const ShopAddIcon = ({isActive}) => {
    return (
        <Icon sx={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M6.50052 18.4584C4.29219 18.4584 2.49219 16.6667 2.49219 14.45V12.0834C2.49219 11.525 3.04219 11.15 3.56719 11.3334C3.78385 11.4084 4.00052 11.4584 4.22552 11.4917C4.32552 11.5084 4.42552 11.525 4.52552 11.525C4.65052 11.5417 4.78385 11.55 4.90885 11.55C5.83385 11.55 6.75052 11.2084 7.47552 10.6167C8.16719 11.2084 9.05885 11.55 10.0089 11.55C10.9589 11.55 11.8422 11.225 12.5339 10.625C13.2505 11.2084 14.1505 11.55 15.0672 11.55C15.2089 11.55 15.3589 11.5417 15.4922 11.525C15.5922 11.5167 15.6755 11.5084 15.7672 11.4917C16.0172 11.4584 16.2422 11.3917 16.4672 11.3167C16.9839 11.1417 17.5255 11.525 17.5255 12.0667V14.45C17.5255 16.6584 15.7339 18.4584 13.5172 18.4584H6.50052Z" fill="#72838C"/>
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M18.3169 7.15817L18.0835 4.9415C17.7502 2.52484 16.6502 1.5415 14.3002 1.5415H12.4169H11.2335H8.8002H7.60854H5.68354C3.33354 1.5415 2.24187 2.52484 1.9002 4.9665L1.68354 7.1665C1.6002 8.02484 1.83354 8.85817 2.34187 9.50817C2.9502 10.2998 3.88354 10.7498 4.9252 10.7498C5.93354 10.7498 6.9002 10.2415 7.50854 9.43317C8.0502 10.2415 8.98354 10.7498 10.0169 10.7498C11.0502 10.7498 11.9585 10.2665 12.5085 9.4665C13.1252 10.2582 14.0752 10.7498 15.0752 10.7498C16.1419 10.7498 17.1002 10.2748 17.7002 9.4415C18.1835 8.79984 18.4002 7.9915 18.3169 7.15817ZM11.2502 6.4415H10.6252V7.0915C10.6252 7.4415 10.3419 7.7165 10.0002 7.7165C9.65854 7.7165 9.3752 7.4415 9.3752 7.0915V6.4415H8.7502C8.40854 6.4415 8.1252 6.1665 8.1252 5.8165C8.1252 5.47484 8.40854 5.1915 8.7502 5.1915H9.3752V4.59984C9.3752 4.25817 9.65854 3.97484 10.0002 3.97484C10.3419 3.97484 10.6252 4.25817 10.6252 4.59984V5.1915H11.2502C11.5919 5.1915 11.8752 5.47484 11.8752 5.8165C11.8752 6.1665 11.5919 6.4415 11.2502 6.4415Z" fill="#72838C"/>
            </svg>
        </Icon>
    )
}
const WalletIcon = ({isActive}) => {
    return (
        <Icon sx={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M18.3329 9.14053V10.8572C18.3329 11.3155 17.9662 11.6905 17.4995 11.7072H15.8662C14.9662 11.7072 14.1412 11.0489 14.0662 10.1489C14.0162 9.62386 14.2162 9.13219 14.5662 8.79053C14.8745 8.47386 15.2995 8.29053 15.7662 8.29053H17.4995C17.9662 8.30719 18.3329 8.68219 18.3329 9.14053Z" fill="#72838C"/>
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M17.0567 12.9591H15.865C14.2817 12.9591 12.9484 11.7675 12.815 10.2508C12.74 9.38415 13.0567 8.51748 13.69 7.90081C14.2234 7.35081 14.965 7.04248 15.765 7.04248H17.0567C17.2984 7.04248 17.4984 6.84248 17.4734 6.60081C17.29 4.57581 15.9484 3.19248 13.9567 2.95915C13.7567 2.92581 13.5484 2.91748 13.3317 2.91748H5.83171C5.59837 2.91748 5.37337 2.93415 5.15671 2.96748C3.03171 3.23415 1.66504 4.81748 1.66504 7.08415V12.9175C1.66504 15.2175 3.53171 17.0841 5.83171 17.0841H13.3317C15.665 17.0841 17.2734 15.6258 17.4734 13.4008C17.4984 13.1591 17.2984 12.9591 17.0567 12.9591ZM10.8317 8.12581H5.83171C5.49004 8.12581 5.20671 7.84248 5.20671 7.50081C5.20671 7.15915 5.49004 6.87581 5.83171 6.87581H10.8317C11.1734 6.87581 11.4567 7.15915 11.4567 7.50081C11.4567 7.84248 11.1734 8.12581 10.8317 8.12581Z" fill="#72838C"/>
            </svg>
        </Icon>
    )
}
const UserAddIcon = ({isActive}) => {
    return (
        <Icon sx={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M18.3083 1.94134C17.7083 1.25801 16.8167 0.833008 15.8333 0.833008C14.9 0.833008 14.05 1.21634 13.4417 1.84134C13.0917 2.19967 12.825 2.63301 12.6667 3.11634C12.5583 3.44967 12.5 3.79967 12.5 4.16634C12.5 4.79134 12.675 5.38301 12.9833 5.88301C13.15 6.16634 13.3667 6.42467 13.6167 6.64134C14.2 7.17467 14.975 7.49967 15.8333 7.49967C16.2 7.49967 16.55 7.44134 16.875 7.32467C17.6417 7.08301 18.2833 6.55801 18.6833 5.88301C18.8583 5.59967 18.9917 5.27467 19.0667 4.94134C19.1333 4.69134 19.1667 4.43301 19.1667 4.16634C19.1667 3.31634 18.8417 2.53301 18.3083 1.94134ZM17.075 4.77467H16.4583V5.42467C16.4583 5.76634 16.175 6.04967 15.8333 6.04967C15.4917 6.04967 15.2083 5.76634 15.2083 5.42467V4.77467H14.5917C14.25 4.77467 13.9667 4.49134 13.9667 4.14967C13.9667 3.80801 14.25 3.52467 14.5917 3.52467H15.2083V2.93301C15.2083 2.59134 15.4917 2.30801 15.8333 2.30801C16.175 2.30801 16.4583 2.59134 16.4583 2.93301V3.52467H17.075C17.4167 3.52467 17.7 3.80801 17.7 4.14967C17.7 4.49134 17.425 4.77467 17.075 4.77467Z" fill="#72838C"/>
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M18.3337 10.0003C18.3337 8.90866 18.1253 7.85866 17.7337 6.90033C17.4753 7.08366 17.1837 7.22533 16.8753 7.32533C16.7837 7.35866 16.692 7.38366 16.592 7.40866C16.9087 8.20866 17.0837 9.08366 17.0837 10.0003C17.0837 11.9337 16.3003 13.692 15.0337 14.9753C14.792 14.667 14.4837 14.3837 14.117 14.142C11.8587 12.6253 8.15866 12.6253 5.88366 14.142C5.51699 14.3837 5.21699 14.667 4.96699 14.9753C3.70033 13.692 2.91699 11.9337 2.91699 10.0003C2.91699 6.09199 6.09199 2.91699 10.0003 2.91699C10.9087 2.91699 11.7837 3.09199 12.5837 3.40866C12.6087 3.30866 12.6337 3.21699 12.667 3.11699C12.767 2.80866 12.9087 2.52533 13.1003 2.26699C12.142 1.87533 11.092 1.66699 10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 12.417 2.70866 14.592 4.35866 16.117C4.35866 16.1253 4.35866 16.1253 4.35033 16.1337C4.43366 16.217 4.53366 16.2837 4.61699 16.3587C4.66699 16.4003 4.70866 16.442 4.75866 16.4753C4.90866 16.6003 5.07533 16.717 5.23366 16.8337C5.29199 16.8753 5.34199 16.9087 5.40033 16.9503C5.55866 17.0587 5.72533 17.1587 5.90033 17.2503C5.95866 17.2837 6.02533 17.3253 6.08366 17.3587C6.25033 17.4503 6.42533 17.5337 6.60866 17.6087C6.67533 17.642 6.74199 17.6753 6.80866 17.7003C6.99199 17.7753 7.17533 17.842 7.35866 17.9003C7.42533 17.9253 7.49199 17.9503 7.55866 17.967C7.75866 18.0253 7.95866 18.0753 8.15866 18.1253C8.21699 18.142 8.27533 18.1587 8.34199 18.167C8.57533 18.217 8.80866 18.2503 9.05032 18.2753C9.08366 18.2753 9.11699 18.2837 9.15032 18.292C9.43366 18.317 9.71699 18.3337 10.0003 18.3337C10.2837 18.3337 10.567 18.317 10.842 18.292C10.8753 18.292 10.9087 18.2837 10.942 18.2753C11.1837 18.2503 11.417 18.217 11.6503 18.167C11.7087 18.1587 11.767 18.1337 11.8337 18.1253C12.0337 18.0753 12.242 18.0337 12.4337 17.967C12.5003 17.942 12.567 17.917 12.6337 17.9003C12.817 17.8337 13.0087 17.7753 13.1837 17.7003C13.2503 17.6753 13.317 17.642 13.3837 17.6087C13.5587 17.5337 13.7337 17.4503 13.9087 17.3587C13.9753 17.3253 14.0337 17.2837 14.092 17.2503C14.2587 17.1503 14.4253 17.0587 14.592 16.9503C14.6503 16.917 14.7003 16.8753 14.7587 16.8337C14.9253 16.717 15.0837 16.6003 15.2337 16.4753C15.2837 16.4337 15.3253 16.392 15.3753 16.3587C15.467 16.2837 15.5587 16.2087 15.642 16.1337C15.642 16.1253 15.642 16.1253 15.6337 16.117C17.292 14.592 18.3337 12.417 18.3337 10.0003Z" fill="#72838C"/>
                <path className={isActive ? "activeIcon" : "unactiveIcon"} d="M10 5.77441C8.275 5.77441 6.875 7.17441 6.875 8.89941C6.875 10.5911 8.2 11.9661 9.95833 12.0161C9.98333 12.0161 10.0167 12.0161 10.0333 12.0161C10.05 12.0161 10.075 12.0161 10.0917 12.0161C10.1 12.0161 10.1083 12.0161 10.1083 12.0161C11.7917 11.9577 13.1167 10.5911 13.125 8.89941C13.125 7.17441 11.725 5.77441 10 5.77441Z" fill="#72838C"/>
            </svg>
        </Icon>
    )
}

export default AdminNavbar