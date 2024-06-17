import { Box, Typography } from "@mui/material"

function Privacy() {
    return (
        <>
            <Box
                className='info'
            >
                <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                        marginBottom: '20px'
                    }}
                >Effective date: [13.08.2023]</Typography>
                <ul className="dot__list" style={{marginBottom: "40px"}}>
                    <li>
                        This Privacy Policy (the "Policy") describes how, a unique online store operating in [Finland], uses and protects the personal information that you provide when using our website. We are committed to protecting your privacy. If we ask you to provide certain information by which you can be identified when using this website, you can be sure that it will be used only in accordance with this Policy.
                    </li>
                </ul>

                <Typography
                    variant="body1"
                    fontWeight={500}    
                    sx={{
                        marginBottom: '20px'
                    }}
                >Effective date: [13.08.2023]</Typography>
                <ul className="dot__list" style={{marginBottom: "40px"}}>
                    <li>
                    This Privacy Policy (the "Policy") describes how, a unique online store operating in [Finland], uses and protects the personal information that you provide when using our website. We are committed to protecting your privacy. If we ask you to provide certain information by which you can be identified when using this website, you can be sure that it will be used only in accordance with this Policy.
                    </li>
                </ul>
            </Box>
        </>
    )
}

export default Privacy