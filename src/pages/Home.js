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
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Home() {
	return (
		<React.Fragment>
			<AppBar position="static">
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
						<Button>
							<Typography Container="h3">Home</Typography>{" "}
						</Button>
						<Button>
							<Typography Container="h3">About Us</Typography>{" "}
						</Button>
						<Button>
							<Typography Container="h3">Sign Up</Typography>{" "}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Home;
