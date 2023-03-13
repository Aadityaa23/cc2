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
import BanImage from "../components/team.jpg";
import MyBanner from "../components/MyBanner";
import CCLogo from "../components/cclogo.png";
import { useMediaQuery } from "react-responsive";
import AadiImage from "../components/Aadi.jpg";
import Footer from "../components/Footer";
import ThongImage from "../components/Thong.png";
import LinesImage from "../components/lines.jpg";

function AboutUs() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	var cardWidth = isMobile ? 350 : 1000;

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
							p: 5,
						}}
					>
						<Box sx={{ px: isMobile ? 1 : 5, py: 5 }}>
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
							src={LinesImage}
							alt="some restaurant"
							sx={{
								height: 200,
								p: 1,
							}}
						/>
						<br />
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
							<Box
								sx={{
									backgroundColor: theme.palette.secondary.main,
									color: theme.palette.primary.light,
									display: "flex",
									flexDirection: flexDir,
									alignItems: "center",
									maxWidth: cardWidth,
									borderRadius: 3,
									p: 2,
								}}
							>
								<CardMedia
									component="img"
									src={AadiImage}
									alt="some restaurant"
									sx={{
										height: 350,
										widt: 350,
										py: 5,
										px: isMobile ? 3 : 10,
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
							</Box>
						</ButtonBase>

						<br />
						<ButtonBase
							href={"https://www.linkedin.com/in/haithongnguyen/"}
							target="_blank"
						>
							<Box
								sx={{
									backgroundColor: theme.palette.secondary.main,
									color: theme.palette.primary.light,
									display: "flex",
									flexDirection: flexDir,
									alignItems: "center",
									maxWidth: cardWidth,
									borderRadius: 3,
									p: 2,
								}}
							>
								<CardMedia
									component="img"
									src={ThongImage}
									alt="some restaurant"
									sx={{
										height: 350,
										widt: 350,
										py: 5,
										px: isMobile ? 3 : 10,
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
							</Box>
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
