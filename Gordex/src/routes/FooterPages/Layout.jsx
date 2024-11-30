import { Outlet, useLocation } from "react-router"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { List, ListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NavBlock = ({ currentPage }) => {

    return (
        <List
            sx={{
                background: 'white',
                marginRight: "30px",
                borderRadius: "10px",
                minWidth: 260,
                width: 260,
                height: 340,
                padding: "10px 12px",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-between",
                // gap: "14px",
                "& > *.MuiListItem-root": {
                    padding: 0,
                }
            }}
        >
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "returns" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/returns"}>Returns and exchanges</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "authenticity" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/authenticity"}>Guarantees of authenticity</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "shipping" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/shipping"}>Shipping</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "about" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/about"}>About Us</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "partnership" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/partnership"}>Partnership / franchise</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "brands" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/brands"}>Brands</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "referral" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/referral"}>Referral programs</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "api" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/api"}>API</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "privacy" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/privacy"}>Privacy Policy</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "rules" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/rules"}>Rules of Use</Link>
            </ListItem>
            <ListItem
                sx={{
                    "& > *": {
                        color: `${currentPage === "faqs" ? "#72838C" : "#212121"}`
                    },
                    transition: '0.3s',
                    "&:hover": {
                        ml: '5px'
                    }
                }}
            >
                <Link to={"/info/faqs"}>FAQs</Link>
            </ListItem>
        </List>
    )
}

function Info() {
    const location = useLocation();
    const currentPage = location.pathname.split('/').at(-1)
    let pageTitle = ''

    switch (currentPage) {
        case "returns": pageTitle = "Returns and exchanges"
            break;
        case "authenticity": pageTitle = "Guarantees of authenticity"
            break;
        case "shipping": pageTitle = "Shipping"
            break;
        case "about": pageTitle = "About Us"
            break;
        case "partnership": pageTitle = "Partnership / franchise"
            break;
        case "brands": pageTitle = "Brands"
            break;
        case "referral": pageTitle = "Referral programs"
            break;
        case "api": pageTitle = "API"
            break;
        case "privacy": pageTitle = "Privacy Policy"
            break;
        case "rules": pageTitle = "Rules of Use"
            break;
        case "faqs": pageTitle = "FAQs"
            break;
        default:
            break;
    }

    return (
        <>
            <Navbar/>
                <main style={{
                        marginTop: 50, 
                        marginBottom: 80,
                        display: "flex",    
                    }} className="container"> 
                    <NavBlock currentPage={currentPage}/>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            width: "100%"
                        }}
                    >
                        <Typography
                            variant="h1"
                            fontSize={18}
                            fontWeight={400}
                        >{pageTitle}</Typography>
                        <Outlet/>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Info