import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import { Box, Checkbox, Button, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from "@mui/material"

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

function Support() {

    return (
        <>
            <Navbar/>
                <main
                    className="container"
                    style={{
                        marginTop: 60,
                        marginBottom: 170,
                        position: "relative"
                    }}
                >

                    <img
                    style={{
                        position: "absolute",
                        left: "59px",
                        top: "79px",
                        width: "30px",
                        height: "30px"
                    }}   
                    src="../../../../public/images/support/supportIcon.svg" alt="" />
                    <Typography 
                    fontSize={40} 
                    fontWeight={500} 
                    variant="h1"
                    sx={{
                        marginLeft: "100px",
                        marginBottom: "20px"
                    }}
                    >Feedback</Typography>

                    <div
                        style={{
                            padding: "0 35px",
                        }}
                    >
                        <form action=""
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    marginBottom: '20px'
                                }}
                            >
                                <Box 
                                sx={{
                                    background: "white", 
                                    borderRadius: "10px",
                                    height: "250px",
                                    width: "350px",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Typography
                                        variant="h2"
                                        fontSize={14}
                                        padding={"20px 20px 0 20px"}
                                        margin={"0 0 20px 0"}
                                        fontWeight={500}
                                    >
                                        Select the section of the application
                                    </Typography>
                                    <RadioGroup
                                        sx={{
                                            flexGrow: 1,
                                            padding: "0 20px 20px 25px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Option label="Return of goods"/>
                                        <Option label="I didn't get the product"/>
                                        <Option label="Become a partner"/>
                                        <Option label="Forgot my password"/>
                                        <Option label="Payment problems"/>
                                        <Option label="The other question is."/>
                                    </RadioGroup>
                                </Box>
                                
                                <Box
                                    sx={{
                                        background: "white", 
                                        borderRadius: "10px",
                                        height: "250px",
                                        width: "350px",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        fontSize={14}
                                        padding={"20px 20px 0 20px"}
                                        margin={"0 0 20px 0"}
                                        fontWeight={500}
                                    >
                                        Ask a question to an employee
                                    </Typography>

                                    <div
                                        style={{
                                            flexGrow: 1,
                                            padding: "0 10px 10px 10px"
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            multiline
                                            minRows={6}
                                            sx={{
                                                background: "#F8F8F8",
                                                border: "none",
                                                outline: 'none',
                                            }}
                                        >

                                        </TextField>
                                    </div>

                                </Box>

                                <Box
                                    sx={{
                                        background: "white", 
                                        borderRadius: "10px",
                                        height: "250px",
                                        width: "350px",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        fontSize={14}
                                        padding={"20px 20px 0 20px"}
                                        margin={"0 0 20px 0"}
                                        fontWeight={500}
                                    >
                                        Enter contact details
                                    </Typography>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            padding: '0 10px 20px 10px',
                                            flexGrow: 1
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="body1">Your name</Typography>
                                            <TextField placeholder="Alex"
                                                sx={{
                                                    background: "#F8F8F8",
                                                    height: "30px",
                                                    "& .MuiInputBase-root": {
                                                        height: "30px",
                                                    }
                                                }}
                                                fullWidth
                                            ></TextField>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1">Phone number</Typography>
                                            <TextField placeholder="+1 000-000-000"
                                                type="number"
                                                sx={{
                                                    background: "#F8F8F8",
                                                    height: "30px",
                                                    "& .MuiInputBase-root": {
                                                        height: "30px",
                                                    }
                                                }}
                                                fullWidth
                                            ></TextField>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1">Phone number</Typography>
                                            <TextField placeholder="youremail@"
                                                type="email"
                                                sx={{
                                                    background: "#F8F8F8",
                                                    height: "30px",
                                                    "& .MuiInputBase-root": {
                                                        height: "30px",
                                                    }
                                                }}
                                                fullWidth
                                            ></TextField>
                                        </Box>
                                    </div>
                                </Box>
                            </div>
                            
                            <Button
                                sx={{
                                    color:"white",
                                    textTransform: 'none',
                                    alignSelf: "end",
                                    width: "240px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: '#212121',
                                    fontWeight: 400,

                                    "&:hover": {
                                        background: "#212121",
                                        color: "white"
                                    }
                                }}
                            >Send request</Button>
                        </form>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

const Option = ({ label }) => {
    return (
        <FormControlLabel
            control={
                <Radio
                    sx={{
                        p: 0
                    }}
                    icon={<RadioButtonUncheckedIcon sx={{color: "grey"}} />}
                    checkedIcon={<TripOriginIcon sx={{color: "grey"}}/>}
                />
            }
            sx={{
                "& .MuiFormControlLabel-label": {
                    fontSize: 12
                },
                "& .MuiSvgIcon-root": {
                    marginRight: "10px",
                }
            }}
            label={label}
        />
    );
}

export default Support