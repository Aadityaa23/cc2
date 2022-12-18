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
	CssBaseline,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";

function Home() {
	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar></NavBar>
			<Typography variant="h4">Home</Typography>
		</React.Fragment>
	);
}

export default Home;
