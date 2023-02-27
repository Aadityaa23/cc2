import { ThemeProvider } from "@emotion/react";
import {
	CardMedia,
	Typography,
	Container,
	Box,
	Button,
	Card,
	ButtonBase,
} from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { theme, Main } from "../components/styles";
import BannerImage from "../components/forrest.jpg";
import BanImage from "../components/team.jpg";
import MyBanner from "../components/MyBanner";
import CCLogo from "../components/cclogo.png";
import { useMediaQuery } from "react-responsive";
import AadiImage from "../components/Aadi.jpg";
import Footer from "../components/Footer";
import ThongImage from "../components/Thong.png";
function AboutUs() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	var cardWidth = isMobile ? 450 : 1000;

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Main>
					<NavBar></NavBar>
					<MyBanner title="About Us" BannerImage={BanImage}></MyBanner>
					<Container
						sx={{
							display: "flex",
							flexDirection: flexDir,
							alignItems: "center",
							justifyContent: "center",
							height: { lg: 350, md: 400 },
						}}
					>
						<Box
							sx={{
								p: 7,
							}}
						>
							<Typography gutterBottom variant="h2">
								Our Purpose
							</Typography>
							<Typography
								gutterBottom
								variant="body"
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								At Carbon Coin, our purpose is to accelerate the growth of
								highly effective Carbon Capture projects so the climate crisis
								can be diverted. From current estimates, we need to be removing
								about 10 Billion tonnes of CO2 from our atmosphere each year to
								meet our climate goals, and we are nowhere close to that. Yet.
							</Typography>
							<br />
						</Box>
						<CardMedia
							component="img"
							src="https://pixabay.com/get/g3d6ee263fe9212cbeb12c1e73eb83a28243f1828056fa63c5ae45757c613ca43cec0cf1926796931cdfe0ab1ee5d13351ee57a2d431f81b8d300c20131f7185eae1ee0d21be72ec3994bed5ad8b0e25e_1920.jpg"
							alt="some restaurant"
							sx={{
								height: 300,
								width: 400,
								px: 1,
								pb: 5,
							}}
						/>
					</Container>
					<Container
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: theme.palette.primary.light,
						}}
					>
						<Typography
							variant="h2"
							color="#000000"
							sx={{
								p: 2,
							}}
						>
							The Team
						</Typography>
						<ButtonBase
							href={"https://www.linkedin.com/in/aadityaa-gupta-9a7979208/"}
							target="_blank"
						>
							<Card
								sx={{
									backgroundColor: theme.palette.secondary.main,
									color: theme.palette.primary.light,
									display: "flex",
									flexDirection: flexDir,
									alignItems: "center",
									width: cardWidth,
								}}
							>
								<CardMedia
									component="img"
									src={AadiImage}
									alt="some restaurant"
									sx={{
										height: 350,
										width: 450,
										py: 5,
										px: 10,
									}}
								/>

								<Box
									sx={{
										px: isMobile ? 3 : 10,
										pb: 2,
									}}
								>
									<Typography variant="h3" gutterBottom>
										Aadityaa Gupta
									</Typography>
									<Typography variant="body">
										Aadityaa is a Computer Science student at the University of
										Melbourne, who is passionate about climate change and
										sustainability. He developed this passion when he moved to
										Canada from India at the age of 11, where he witnessed how
										beautiful nature was by going on hikes and camping trips.
										Aadityaa has had professional working experience at Telstra,
										where he completed an internship as a Data Analyst. In his
										free time Aadityaa likes to volunteer for sustainability
										initiatives, and explore his creativity through stand-up
										comedy at the university.
									</Typography>
								</Box>
							</Card>
						</ButtonBase>

						<br />
						<ButtonBase
							href={"https://www.linkedin.com/in/haithongnguyen/"}
							target="_blank"
						>
							<Card
								sx={{
									backgroundColor: theme.palette.secondary.main,
									color: theme.palette.primary.light,
									display: "flex",
									flexDirection: flexDir,
									alignItems: "center",
									width: cardWidth,
								}}
							>
								<CardMedia
									component="img"
									src={ThongImage}
									alt="some restaurant"
									sx={{
										height: 350,
										width: 450,
										py: 5,
										px: 10,
									}}
								/>

								<Box
									sx={{
										px: isMobile ? 3 : 10,
										pb: 2,
									}}
								>
									<Typography variant="h3" gutterBottom>
										Hai Thong Nguyen
									</Typography>
									<Typography variant="body">
										Hai Thong Nguyen is a computer science and psychology
										student at the University of Melbourne. He grew up in
										Neustadt an der Weinstraße, Germany, before moving to
										Bangkok, Thailand for high school. There, Hai witnessed the
										impact of human rights and climate change first-hand and had
										worked alongside societies and NGOs including A21 Thailand.
										Presently, Hai devotes his time in climate tech initiatives
										and occasionally publishes blogs relating to tech.
									</Typography>
								</Box>
							</Card>
						</ButtonBase>
						<br />
					</Container>
					<Footer></Footer>
				</Main>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default AboutUs;
