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
	List,
	ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import MyBanner from "../components/MyBanner";
import MyGridItem from "../components/MyGridItem";
import Footer from "../components/Footer";
import { Main, theme } from "../components/styles";
import CCLogo from "../components/cclogo.png";
import {
	PropaneSharp,
	Rowing,
	StayPrimaryLandscape,
} from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";
import BanImage from "../components/forrest.jpg";

function Home() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const flexDir = isMobile ? "column" : "row";
	const currHeight = isMobile ? 500 : 400;

	return (
		<React.Fragment>
			<CssBaseline />
			<Main>
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
						height: { lg: 350, md: 400 },
					}}
				>
					<Box
						sx={{
							p: 7,
						}}
					>
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
						<Button>Buy Now</Button>
					</Box>
					<CardMedia
						component="img"
						src={CCLogo}
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
						We are doing this by...
					</Typography>
					<Grid container spacing={4}>
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
					<Typography
						variant="h6"
						textAlign="center"
						gutterBottom
						sx={{
							color: theme.palette.info.dark,
						}}
					>
						So every time a new Carbon Coin is minted, we will extract one tonne
						of CO2 from the air and store it underground permenantly, using a
						Carbon removal process called Direct Air Capture
					</Typography>
				</Container>
				<Container
					sx={{
						display: "flex",
						flexDirection: flexDir,
						alignItems: "center",
						justifyContent: "center",
						py: 7,
					}}
				>
					<CardMedia
						component="img"
						src={CCLogo}
						alt="some restaurant"
						sx={{
							height: "40%",
							width: "40%",
							px: 1,
						}}
					/>
					<Box
						sx={{
							p: 7,
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
						<MyGridItem title="Individuals"></MyGridItem>
						<MyGridItem title="Small Businesses"></MyGridItem>
						<MyGridItem title="Corporations"></MyGridItem>
					</Grid>
					<Typography
						variant="h6"
						textAlign="center"
						gutterBottom
						sx={{
							color: theme.palette.info.dark,
						}}
					>
						So every time a new Carbon Coin is minted, we will extract one tonne
						of CO2 from the air and store it underground permenantly, using a
						Carbon removal process called Direct Air Capture
					</Typography>
				</Container>
				<Container
					sx={{
						display: "flex",
						flexDirection: flexDir,
						alignItems: "center",
						justifyContent: "center",
						py: 7,
						px: 10,
					}}
				>
					<Box
						sx={{
							p: 5,
						}}
					>
						<Typography variant="h2" gutterBottom>
							Benefits
						</Typography>
					</Box>
					<Box
						sx={{
							px: isMobile ? 1 : 5,
						}}
					>
						<List>
							<ListItem>
								<Typography variant="body">
									Track the exact amount of CO2 you have buried
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body">
									Earn interest on your investments by staking
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body">
									Join the rest of the world to combat climate change
								</Typography>
							</ListItem>
						</List>
					</Box>
					<Box
						sx={{
							px: isMobile ? 1 : 5,
						}}
					>
						<List>
							<ListItem>
								<Typography variant="body">
									Share your contributions with the rest of the world
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body">
									Get the highest quality carbon credits
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body">
									Have a direct impact on the climate crisis
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Container>
			</Main>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default Home;
