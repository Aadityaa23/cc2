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
import { useMediaQuery } from "react-responsive";

function NavBar() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	const ccText = isMobile ? "" : "";
	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AppBar position="static" color="primary">
					<Toolbar
						sx={{
							justifyContent: "space-between",
							height: 70,
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
											height: 30,
											width: 60,
											pr: 1,
										}}
									/>
									<Typography variant="h5">{ccText}</Typography>
								</Box>
							</ButtonBase>
						</Box>

						<Box
							sx={{
								display: "flex",
								direction: "row",
							}}
						>
							<Button
								sx={{
									color: theme.palette.primary.light,
									width: 100,
								}}
								href="/"
							>
								<Typography variant="p">Home</Typography>{" "}
							</Button>
							<Button
								sx={{
									color: theme.palette.primary.light,
									width: 100,
								}}
								href="/aboutus"
							>
								<Typography variant="p">About Us</Typography>{" "}
							</Button>
							<Button
								href="https://nphbdc7fpd8.typeform.com/to/JnhBOLoo?fbclid=IwAR1OCkvEu9eGjv0DPwXMrNCeByHvcIWjabetvIw7ZCee7Gf-TSAdyw3ysjE&typeform-source=l.facebook.com"
								target="_blank"
								sx={{
									color: theme.palette.primary.light,
									width: 100,
								}}
							>
								<Typography variant="p">Sign Up</Typography>{" "}
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default NavBar;
