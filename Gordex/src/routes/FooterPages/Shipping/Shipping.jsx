import { Box, Typography } from "@mui/material"

const TextList = ({ title, text }) => {
    
    const textArray = text.split('\n').map(line => line.trim());

    return (
        <div>
            <Typography
                variant="body1"
                fontWeight={600}
                sx={{
                    marginBottom: "20px"
                }}
            >{title}</Typography>

            <ul className="dot__list">
                {textArray.map((line, index) => 
                    <li key={index}>
                        <Typography variant="body1">{line}</Typography>
                    </li>
                )}
            </ul>
        </div>
    );


}

function Shipping() {
    return (
        <>
            <Box className='info'
                sx={{
                    padding: "20px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px"
                    }}
                >
                    <TextList
                        title='International shipping'
                        text={
                        `We offer services of international courier transport companies such as DHL, FedEx, UPS, TNT, EMS and other world leaders in delivery. 
                        International delivery is available only for orders placed via our online store.
                        The courier delivery company is selected automatically depending on your location, workload of the transportation company and workload of the regional warehouse from which the delivery will be made. Based on these criteria, we automatically select the most appropriate shipping company.
                        We provide the option of international shipping insurance to ensure maximum protection and safety of customers.
                        When shipping internationally, we follow all regulatory requirements and standards assigned for international trade. We ensure that our goods and services meet all necessary requirements, including health and safety, environmental standards and customs regulations.
                        Our company has years of experience in international shipping. We have a professional team of specialists who not only ensure a high level of service, but also constantly monitor the quality of our services.
                        We provide all necessary documentation for international delivery, including bills of lading, invoices and other documents required for customs clearance.
                        We compensate our customers for delays in international shipping in accordance with our compensation policy.
                        We actively implement environmental programs for international shipping, enabling us to reduce our negative impact on the environment and promote sustainable development.
                        Our company covers deliveries to many countries around the world, providing our customers with maximum global logistics support.`}
                    />
                    <TextList
                        title='Shipping cost'
                        text={
                        `When paying in fiat currency : international shipping charges are separate from the cost of the item. The shipping cost is calculated automatically depending on the item, the load of the general cargo to your region, and the distance of your home from the sorting centers. The buyer must account for additional costs such as VAT, customs duties and shipping charges. These costs are not included in the price of the goods and are determined in accordance with the laws of the country where the goods are sent.
                        When paying in cryptocurrency: payment for international delivery is not made by the buyer, the delivery is free of charge and is at the expense of the online store. Due to the absence of VAT on bank charges when paying by cryptocurrency, our business model includes free delivery of goods to the customer, regardless of size, weight and other features of delivery. The price of the product already includes shipping costs, taxes and customs duties.`}
                    />
                    <TextList
                        title='Delivery time'
                        text={
                        `The delivery time depends on the country and place of delivery, the workload of the warehouse and the workload of the courier transport company most suitable for you. On average, delivery takes 10 to 20 days.
                        If delivery is required to a remote region, additional delivery time may be required. In such cases we contact the customer to discuss possible delivery options.
                        We are not responsible for delays due to customs procedures, holidays or other reasons beyond our control. However, if the client has problems with the delivery, we will try to help as much as possible to find a way out of the situation.
                        We guarantee compliance with delivery deadlines, so that clients can be sure that their cargo will be delivered on time. We strictly control all stages of delivery and notify clients about changes of terms of delivery.
                        We process orders for international delivery in the shortest possible time, so that customers can receive their orders as quickly as possible.
                        We notify our customers about the status and changes in the delivery in the personal cabinet in real time.`}
                    />
                    <TextList
                        title='Order Tracking'
                        text={
                        `We provide the ability to track the timing and status of deliveries through your personal account page, where you can see the current delivery status and timing of your order in real time.
                        We provide a convenient online interface for ordering international shipments and tracking their status.`}
                    />
                    
                    <div
                        style={{
                            display: "flex",
                            flexDirection:"column",
                        }}
                    >
                        <Typography sx={{marginBottom: "20px"}} fontWeight={600} variant="body1">
                        Guarantees, cargo insurance and customs duties
                        </Typography>

                        <Typography variant="body1">
                        International shipping availability. International shipping is available only for orders placed through our online store.
                        When paying with cryptocurrency we guarantee successful customs clearance for our customers. 100% of all shipments paid in cryptocurrency are delivered in common cargo, which means that your order is delivered to your region with other orders, which removes from you responsibility of customs clearance, ensuring full compliance with all necessary requirements and regulations. Extended delivery times are possible.
                        </Typography>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Shipping