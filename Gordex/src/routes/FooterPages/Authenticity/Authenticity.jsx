import { Box, Typography } from "@mui/material"

function Authenticity() {
    return (
        <>
            <Box className="info"
                style={{
                    padding: "30px 25px 30px 80px",
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        marginBottom: "40px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "47px",
                            marginRight: "80px"
                        }}
                    >
                        <TextContent 
                            title = "Quality Control"
                            text = {`A final check in our verification process, our QA experts ensure the product meets our high standards.
                            Shop with confidence, knowing that every purchase is verified.`}
                            img="qualityControl"
                        />
                        <TextContent 
                            title = "Condition"
                            text = {`We only allow stock of new items in our marketplace. This means that every item purchased, must be brand new and never used. `}
                            img="condition"
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: '40px'
                        }}
                    >
                        <TextContent 
                            title = "Packaging"
                            text = {`Our team ensures that the packaging meets high quality standards.
                            Before handing over the packaged goods to the courier company, our experts check the quality of the packaging once again.`}
                            img="packaging"
                        />
                        <TextContent 
                            title = "Quality Assurance"
                            text = {`A final check in our verification process, our QA experts ensure the product meets our high standards.`}
                            img="qualityAssurance"
                        />
                    </div>
                </div>
                <TextContent
                    title="Fighting Counterfeits"
                    text={`Like it or not, counterfeits are a problem for current culture goods on the secondary market. The quality of fake items has increased, as has the quantity of unauthorized items (often made in the same factory as the real items).
                    We are always striving to combat counterfeit goods. The product you buy in our store, in addition to the quality check of our store storeX, which consists of three stages of verification, from more than 20 experts, also passes through authentication checks such stores as stockX, flightclub, grailed, oskelly and poizon. `}
                    img="fightingCounterfeits"
                />
            </Box>
        </>
    )
}

const TextContent = ({ title, text, img }) => {
    let src = '';
    switch (img) {
        case "qualityControl": src = '../../../../public/images/info/qualitycontrol.svg'
            break;
        case "condition": src = '../../../../public/images/info/Condition.svg'
            break;
        case "fightingCounterfeits": src = '../../../../public/images/info/FightingCounterfeits.svg'
            break;
        case "packaging": src = '../../../../public/images/info/Packaging.svg'
            break;
        case "qualityAssurance": src = '../../../../public/images/info/QualityAssurance.svg'
            break;
        default:
            break;
    }

    return (
        <div 
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            <img 
                style={{
                    left: '-42px',
                    top: '5px',
                    position: "absolute",
                    width: 30,
                    height: 30
                }}
                src={src} alt="" />
            <Typography
                variant="body1"
                fontWeight={600}
                sx={{
                    marginBottom: "10px"
                }}
            >{title}</Typography>

            <Typography
                variant='body1'
            >
                {text}
            </Typography>
        </div>
    );
}

export default Authenticity