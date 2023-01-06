import { TabPanelUnstyled } from "@mui/base";
import {
	AppBar,
	Menu,
	MenuItem,
	Container,
	Toolbar,
	Typography,
	Button,
	Grid,
	ThemeProvider,
	CssBaseline,
	CardMedia,
	ButtonBase,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "./styles";
import CCLogo from "../components/cclogo.png";

function NavBar() {
	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AppBar position="static" color="primary">
					<Toolbar
						sx={{
							justifyContent: "space-between",
							height: 75,
						}}
					>
						<Box>
							<ButtonBase href="/">
								<Box
									display="flex"
									direction="row"
									sx={{
										justifyContent: "left",
										alignItems: "center",
									}}
								>
									<CardMedia
										component="img"
										src={CCLogo}
										alt="some restaurant"
										sx={{
											height: "10%",
											width: "10%",
											pr: 1,
										}}
									/>
									<Typography variant="h2">Carbon Coin</Typography>
								</Box>
							</ButtonBase>
						</Box>

						<Box>
							<Button
								sx={{
									color: theme.palette.primary.light,
								}}
								href="/"
							>
								<Typography Container="h3">Home</Typography>{" "}
							</Button>
							<Button
								sx={{
									color: theme.palette.primary.light,
								}}
								href="/aboutus"
							>
								<Typography Container="h3">About Us</Typography>{" "}
							</Button>
							<Button
								sx={{
									color: theme.palette.primary.light,
								}}
							>
								<Typography Container="h3">Sign Up</Typography>{" "}
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default NavBar;
