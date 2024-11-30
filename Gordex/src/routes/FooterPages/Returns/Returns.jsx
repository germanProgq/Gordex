import { Box, Typography } from '@mui/material'
import '../layout.css'


function Returns() {
    return (
        <>
        <Box className="info">
            <Typography 
                variant="body1"
                fontWeight={600}
                sx={{
                    mb: "20px"
                }}
            >Return Policy</Typography>

            <div>
                <Typography variant="body1">
                We accept returns within 14 days of delivery of your order.
                </Typography>        

                <Typography variant="body1">
                Returned merchandise must comply with our return policy:
                </Typography>        

                

                <ul 
                style={{
                    marginBottom: "20px"
                }}
                className='dot__list'>
                    <li>
                        <Typography variant='body1'>Items must be returned unworn, undamaged and unused, with all tags attached and original packaging.</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>Final sale items cannot be returned unless the item arrives damaged or defective upon delivery to you.</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>Shoes and accessories must be returned with the original branded boxes and dust bags where provided, and placed in a protective box when returned.</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>When trying on shoes, please do not mark the soles or damage the shoe box</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>If a SOTREX authenticity tag or brand is attached to an item, it must be returned with the tag in its original position.</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>Underwear and swimwear cannot be returned.</Typography>
                    
                    </li>
                    <li>
                        <Typography variant='body1'>Jewelry must be returned in the same condition in which it arrived, including all branded packaging and documentation provided with it.</Typography>
                    
                    </li>
                </ul>
            </div>

            <Typography 
                variant='body1'
                sx={{
                    marginBottom: "50px"
                }}
            >
            Please be careful when trying on your purchases and return them in the same condition in which you received them. Any returns that do not comply with our policy will not be accepted.
            </Typography>

            <Typography 
                variant='body1'
                fontWeight={600}
                sx={{
                    marginBottom: "20px"
                }}
            >How to return</Typography>

            <Typography variant='body1'>Here's what you need to do:</Typography>

            <ol className='list__numbers'
                style={{
                    marginBottom: "50px"
                }}
            >
                <li>
                    <Typography variant='body1'>
                        After you receive your order, on the page of your personal account in the "status" section of the current order, select "return order".
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                        Indicate the reason for return, attach a photo in case the item was damaged during shipping or has other defects.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1'>
                    Next, in the return window, select the courier delivery service that is available in your area, the service is free of charge at the expense of our online store, you do not have to pay anything.
                    </Typography>
                </li>
            </ol>

            <Typography 
                fontWeight={600} 
                variant='body1'
                sx={{
                    marginBottom: '20px'
                }}
                >Attention</Typography>
            <ul className='dot__list'>
                <li>
                    <Typography variant='body1'>You must ship from the country where your order was placed</Typography>
                </li>
                <li>
                    <Typography variant='body1'>When returning goods, please include any accessories, branded boxes or covers that came with your order in STOREX reusable packaging. If anything is damaged or missing when returning, you may not receive a refund.</Typography>
                </li>
            </ul>
        </Box>
        </>
    )
}

export default Returns