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
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "./styles";

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
							<Typography variant="h2">Carbon Coin</Typography>
						</Box>

						<Box>
							<Button color="secondary" href="/">
								<Typography Container="h3">Home</Typography>{" "}
							</Button>
							<Button color="secondary" href="/aboutus">
								<Typography Container="h3">About Us</Typography>{" "}
							</Button>
							<Button color="secondary">
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
