import { TabPanelUnstyled } from "@mui/base";
import {
	AppBar,
	Menu,
	MenuItem,
	Container,
	Toolbar,
	Typography,
	CardMedia,
	Button,
	Grid,
	CssBaseline,
	Card,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import MyBanner from "../components/MyBanner";
import MyGridItem from "../components/MyGridItem";

import { Main, theme } from "../components/styles";
import CCLogo from "../components/cclogo.png";
import {
	PropaneSharp,
	Rowing,
	StayPrimaryLandscape,
} from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";

function Home() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	const currHeight = isMobile ? 500 : 400;

	return (
		<React.Fragment>
			<CssBaseline />
			<Main>
				<NavBar></NavBar>
				<MyBanner></MyBanner>

				<Container
					sx={{
						display: "flex",
						flexDirection: flexDir,
						alignItems: "center",
						pb: 10,
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
						<Typography gutterBottom variant="p">
							Our mission is to transform people’s perception on Carbon. Carbon
							Dioxide should be viewed as a store of value similar to Gold. It
							is a resource that needs to be mined from the air, and locked away
							safely in deep underground vaults.
						</Typography>
						<br />
						<Button>Buy Now</Button>
					</Box>
					<CardMedia
						component="img"
						src={CCLogo}
						alt="some restaurant"
						sx={{
							height: "40%",
							width: "40%",
							pr: 1,
						}}
					/>
				</Container>
				<Container
					sx={{
						minHeight: 400,
						backgroundColor: theme.palette.primary.light,
					}}
				>
					<Grid container spacing={4} alignItems="stretch">
						<MyGridItem
							title="Step 1"
							body="This is the first step towwards greatness"
						></MyGridItem>
						<MyGridItem
							title="Step 2"
							body="This is the first step towwards greatness"
						></MyGridItem>
						<MyGridItem
							title="Step 3"
							body="This is the first step towwards greatness"
						></MyGridItem>
					</Grid>
				</Container>
			</Main>
		</React.Fragment>
	);
}

export default Home;
