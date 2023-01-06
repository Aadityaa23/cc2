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
import MyBanner from "../components/MyBanner";
import { Main } from "../components/styles";

function Home() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Main>
				<NavBar></NavBar>
				<MyBanner></MyBanner>
				<Typography variant="h4">Home</Typography>
			</Main>
		</React.Fragment>
	);
}

export default Home;
