import { ThemeProvider } from "@emotion/react";
import {
	CardMedia,
	Typography,
	Container,
	Grid,
	Box,
	Button,
	Card,
	ButtonBase,
} from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { theme, Main } from "../components/styles";
import BanImage from "../components/smoke.jpg";
import MyBanner from "../components/MyBanner";
import DACPic from "../components/dacpic.png";
import { useMediaQuery } from "react-responsive";
import AadiImage from "../components/Aadi.jpg";
import Footer from "../components/Footer";
import ThongImage from "../components/Thong.png";
import MyGridItem from "../components/MyGridItem";

function DAC() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	var cardWidth = isMobile ? 450 : 1000;

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Main>
					<NavBar></NavBar>
					<MyBanner
						title="Direct Air Capture"
						BannerImage={BanImage}
					></MyBanner>
					<Container
						sx={{
							display: "flex",
							flexDirection: flexDir,
							alignItems: "center",
							justifyContent: "center",
							py: 8,
							px: 5,
						}}
					>
						<Box
							sx={{
								textAlign: "center",
								py: 5,
								px: isMobile ? 1 : 5,
							}}
						>
							<Typography gutterBottom variant="h4">
								What is Direct Air Capture?
							</Typography>
							<Typography
								variant="body"
								gutterBottom
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								Direct air capture (DAC) is a process that involves the removal
								of carbon dioxide (CO2) directly from the ambient air, rather
								than from industrial point sources like power plants or
								factories. This technology is an important part of efforts to
								mitigate climate change by reducing the concentration of
								greenhouse gases in the atmosphere.
							</Typography>
							<br />
							<Typography
								gutterBottom
								variant="body"
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								DAC typically involves the use of chemical adsorbents or
								solvents that selectively bind to CO2 molecules in the air,
								allowing them to be captured and stored or utilized. The
								captured CO2 can be stored in geological formations, utilized in
								industrial processes, or converted into products such as fuel or
								building materials.
							</Typography>
							<br />
						</Box>
						<CardMedia
							component="img"
							src={DACPic}
							alt="Carbon molecules"
							sx={{
								height: 200,
								width: 300,
								p: 1,
							}}
						/>
					</Container>
					<Container
						sx={{
							minHeight: 400,
							backgroundColor: theme.palette.primary.light,
						}}
					>
						<Typography
							variant="h3"
							gutterBottom
							textAlign="center"
							sx={{
								color: theme.palette.info.main,
								p: 2,
							}}
						>
							The Process
						</Typography>
						<Grid container spacing={3}>
							<MyGridItem
								title="Step 1"
								body="Air is sucked into a large container"
							></MyGridItem>
							<MyGridItem
								title="Step 2"
								body="CO2 molecules are separated from other air molecules"
							></MyGridItem>
							<MyGridItem
								title="Step 3"
								body="The CO2 is mineralised into rocks and stored safely underground"
							></MyGridItem>
						</Grid>
						<br />
						<Typography
							variant="h6"
							textAlign="center"
							gutterBottom
							sx={{
								color: theme.palette.info.dark,
							}}
						>
							The process for Direct Air Capture has many steps, but at a high
							level this is what it looks like
						</Typography>
						<br />
					</Container>
					<Container
						sx={{
							display: "flex",
							flexDirection: flexDir,
							alignItems: "center",
							p: 5,
						}}
					>
						<Box sx={{ p: 1 }}>
							<iframe
								width="360"
								height="200"
								src="https://www.youtube.com/embed/AW3gaelBypY"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</Box>
						<Box
							sx={{
								px: isMobile ? 1 : 5,
								py: 5,
								textAlign: "center",
							}}
						>
							<Typography variant="h4" gutterBottom>
								Why Direct Air Capture?
							</Typography>
							<Typography
								variant="body"
								gutterBottom
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								There are many issues with the current state of the Carbon
								Capture market, one of them being the inability to validate the
								true impact of many projects
							</Typography>
							<br />
							<Typography
								variant="body"
								gutterBottom
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								Direct Air Capture is the most accurate way to track how much
								Carbon Dioxide is being removed from the air, and ensure the
								that data collected is valid.
							</Typography>
							<br />
							<Typography
								variant="body"
								gutterBottom
								sx={{
									color: theme.palette.secondary.light,
								}}
							>
								Combining this tech with blockchains will create a highly
								transparent form of Carbon Credits, and our customers can be
								certain where there money is going
							</Typography>
						</Box>
					</Container>

					<Footer></Footer>
				</Main>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default DAC;
