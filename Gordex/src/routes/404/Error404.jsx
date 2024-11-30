import { Container, Typography } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Error404() {
	return (
		<>
			<Navbar/>
			<Container
				component={"main"}
				sx={{
					marginTop: 'calc(150px + 68px)',
					marginBottom: "277px",
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						color: "#72838C",
						fontWeight: 500,
						fontSize: "68px",
						marginBottom: "32px"
					}}
				>404</Typography>
				<Typography
					variant="body1"
					fontWeight={500}
					sx={{
						marginBottom: '10px'
					}}
				>Unfortunately, the page was not found or the page is undergoing technical work.</Typography>
				<Typography
					variant="body1"
					fontWeight={500}
				>Use the search or go to the product catalog.</Typography>
			</Container>
			<Footer/>
		</>
	)
}

export default Error404