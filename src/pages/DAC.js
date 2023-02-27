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
import BannerImage from "../components/forrest.jpg";
import BanImage from "../components/team.jpg";
import MyBanner from "../components/MyBanner";
import CCLogo from "../components/cclogo.png";
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
						BannerImage={
							"https://pixabay.com/get/gbbecd9058ad67fb162f129f4c9ffac06cbd985f74b8bbe658ee7df7ae8008b47b8de6f7e4d026186cf5dbf5a73919323de3d879febb612cd9731a4822918175c0f666e09f321ca39cf5b04fb8aa06b57_1920.jpg"
						}
					></MyBanner>
					<Container
						sx={{
							display: "flex",
							flexDirection: flexDir,
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								p: 7,
								py: 10,
							}}
						>
							<Typography gutterBottom variant="h2">
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
							src="https://pixabay.com/get/g911ee4095891e2216f5b056c92f345fc07b532ccb2610f00c5ab46f387e2edc24932ccc62500d0b7bc01c55cea50f381ba34771ae5a43dbf8f7699c0948347a4b6a2afc26389d8c95a32bee85e07e639_1920.png"
							alt="some restaurant"
							sx={{
								height: 400,
								width: 400,
								px: 1,
								pb: 5,
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
							variant="h2"
							gutterBottom
							textAlign="center"
							sx={{
								color: theme.palette.info.main,
								p: 2,
							}}
						>
							The Process
						</Typography>
						<Grid container spacing={4}>
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
					</Container>
					<Container
						sx={{
							display: "flex",
							flexDirection: flexDir,
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								p: 5,
							}}
						>
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
								p: 5,
							}}
						>
							<Typography variant="h2" gutterBottom>
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
