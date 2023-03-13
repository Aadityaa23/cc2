import { TabPanelUnstyled } from "@mui/base";
import {
	AppBar,
	Menu,
	MenuItem,
	Container,
	Toolbar,
	Typography,
	CardMedia,
	Link,
	Button,
	Grid,
	CssBaseline,
	Card,
	List,
	ListItem,
	ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import MyBanner from "../components/MyBanner";
import MyGridItem from "../components/MyGridItem";
import Footer from "../components/Footer";
import { Main, theme } from "../components/styles";
import HomePic from "../components/home-banner.png";
import CCLogo from "../components/cclogo.png";
import {
	PropaneSharp,
	Rowing,
	StayPrimaryLandscape,
} from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";
import BanImage from "../components/circle.jpg";
import { useState, useContext, useEffect } from "react";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PublicIcon from "@mui/icons-material/Public";
import ShareIcon from "@mui/icons-material/Share";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

import MyDialog from "../components/MyDialog";

function Home() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	const currHeight = isMobile ? 500 : 400;
	const currWidth = isMobile ? 300 : 1;

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<MyDialog open={open} handleClose={handleClose} />
			<Main sx={{}}>
				<NavBar></NavBar>
				<MyBanner
					title="Carbon Coin"
					tagline="Using Crypto to Combat Climate Change"
					BannerImage={BanImage}
				></MyBanner>

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
							Our Mission
						</Typography>
						<Typography
							gutterBottom
							variant="body"
							sx={{
								color: theme.palette.secondary.light,
							}}
						>
							Our mission is to transform people’s perception on Carbon. Carbon
							Dioxide should be viewed as a store of value similar to Gold. It
							is a resource that needs to be mined from the air, and locked away
							safely in deep underground vaults.
						</Typography>
						<br />
						<br />
						<Button variant="outlined" onClick={handleClickOpen}>
							<Typography>Buy Now</Typography>
						</Button>
					</Box>
					<CardMedia
						component="img"
						src={CCLogo}
						alt="some restaurant"
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
						variant="h2"
						gutterBottom
						textAlign="center"
						sx={{
							color: theme.palette.info.dark,
							p: 2,
						}}
					>
						We are doing this by...
					</Typography>
					<Grid container spacing={3}>
						<MyGridItem
							title="Step 1"
							body="Remove one tonne of CO2 for each Carbon Coin produced"
						></MyGridItem>
						<MyGridItem
							title="Step 2"
							body="Use Direct Air Capture to cleanse the air"
						></MyGridItem>
						<MyGridItem
							title="Step 3"
							body="Scale the tech to reduce costs over time"
						></MyGridItem>
					</Grid>
					<br />
					<Typography
						variant="h6"
						textAlign="center"
						sx={{
							color: theme.palette.info.dark,
							P: 5,
						}}
					>
						So every time a new Carbon Coin is minted, we will extract one tonne
						of CO2 from the air and store it underground permenantly, using a
						Carbon removal process called{" "}
						<Link href="/dac">Direct Air Capture</Link>
					</Typography>

					<br />
				</Container>
				<Container
					sx={{
						display: "flex",
						flexDirection: flexDir,
						alignItems: "center",
						justifyContent: "center",
						p: 5,
					}}
				>
					<CardMedia
						component="img"
						src={HomePic}
						alt="some restaurant"
						sx={{
							height: "350px",
							p: 1,
						}}
					/>
					<Box
						sx={{
							py: 5,
							px: isMobile ? 1 : 5,
						}}
					>
						<Typography gutterBottom variant="h2">
							Sustainable Tech
						</Typography>
						<Typography
							gutterBottom
							variant="p"
							sx={{
								color: theme.palette.secondary.light,
							}}
						>
							Unlike traditional crypto currencies, Carbon Coin is built on a
							Proof of Stake minting algorithm. This means there's a minimal
							carbon footprint to create each new coin, and the tech is easily
							scalable
						</Typography>
						<br />
					</Box>
				</Container>
				<Container
					maxWidth={false}
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
						Our Customers{" "}
					</Typography>
					<Grid container spacing={4} alignItems="stretch">
						<MyGridItem title="Individuals" HouseFlag={true}></MyGridItem>
						<MyGridItem title="Small Businesses" BusFlag={true}></MyGridItem>
						<MyGridItem title="Corporations" CorpFlag={true}></MyGridItem>
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
						Those who are concerned about the environment can choose to make a
						positive impact with Carbon Coin
					</Typography>
					<br />
				</Container>

				<Container
					sx={{
						alignItems: "center",
						justifyContent: "center",
						py: 7,
						px: isMobile ? 3 : 10,
					}}
				>
					<Grid container spacing={2}>
						<Grid
							item
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							xs={12}
							sm={6}
							md={4}
							lg={4}
							xl={2}
						>
							<Typography variant="h2" gutterBottom>
								Benefits
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
							<List>
								<ListItem>
									<ListItemIcon>
										<HistoryToggleOffIcon
											fontSize="large"
											sx={{ color: theme.palette.primary.light }}
										/>
									</ListItemIcon>
									<Typography variant="body">
										Track the exact amount of CO2 you have buried
									</Typography>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ShowChartIcon
											fontSize="large"
											sx={{ color: theme.palette.secondary.light }}
										/>
									</ListItemIcon>
									<Typography variant="body">
										Earn interest on your investments by staking
									</Typography>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<PublicIcon
											fontSize="large"
											sx={{ color: theme.palette.secondary.light }}
										/>
									</ListItemIcon>
									<Typography variant="body">
										Join the rest of the world to combat climate change
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
							<List>
								<ListItem>
									<ListItemIcon>
										<ShareIcon
											fontSize="large"
											sx={{ color: theme.palette.secondary.light }}
										/>
									</ListItemIcon>
									<Typography variant="body">
										Share your contributions with the rest of the world
									</Typography>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<LocalPoliceIcon
											fontSize="large"
											sx={{ color: theme.palette.secondary.light }}
										/>
									</ListItemIcon>
									<Typography variant="body">
										Get the highest quality carbon credits
									</Typography>
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Main>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default Home;
