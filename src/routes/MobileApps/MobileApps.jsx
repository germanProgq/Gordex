import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'

function MobileApps() {
    return (
        <>
            <Navbar/>
                <main className="container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "80px",
                        marginBottom: "160px"
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            width: "270px",
                            height: "100px",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 13,
                            fontWeight: 500,
                            padding: "20px 20px 20px 60px",
                            position: "relative"
                        }}
                    >
                        <img
                        style={{
                            position: "absolute",
                            left: "20px",
                            top: '19px'
                        }}
                        src="../../../../public/images/mobile/code.svg" alt="" />
                        Mobile apps are in the final stages of development, take advantage of the temporary solution and make bargain purchases with convenience.
                    </div>

                    <div
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            
                        }}
                    >
                        <img
                            style={{
                                width: "190px",
                                height: "390px",
                                marginRight: '30px'
                            }}
                            src="../../../../public/images/mobile/mobileApp_2.png" alt="" />
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}
                        >
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px"
                                }}>
                                    <img src="../../../../public/images/mobile/share.svg" alt="" />
                                </div>
                                Share
                            </li>
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px"
                                }}>
                                    <img src="../../../../public/images/mobile/addToHomeScreen.svg" alt="" />
                                </div>
                                Add to home screen
                            </li>
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    position: "relative"
                                }}>
                                    <img src="../../../../public/images/mobile/done.svg" alt="" />
                                </div>
                                Done
                            </li>
                            
                        </ul>
                    </div>


                    <div
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            
                        }}
                    >
                        <img
                            style={{
                                width: "190px",
                                height: "390px",
                                marginRight: '30px'
                            }}
                            src="../../../../public/images/mobile/mobileApp_1.png" alt="" />
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}
                        >
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px"
                                }}>
                                    <img src="../../../../public/images/mobile/options.svg" alt="" />
                                </div>
                                Options
                            </li>
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px"
                                }}>
                                    <img src="../../../../public/images/mobile/addToHomeScreen_2.svg" alt="" />
                                </div>
                                Add to home screen
                            </li>
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "13px"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    background: 'white',
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    position: "relative"
                                }}>
                                    <img src="../../../../public/images/mobile/Rectangle.svg" alt="" />
                                    <img 
                                        style={{
                                            position: 'absolute',
                                            // alignSelf: 'center'
                                        }}
                                        src="../../../../public/images/mobile/done.svg" alt="" />
                                </div>
                                Done
                            </li>
                            
                        </ul>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default MobileApps