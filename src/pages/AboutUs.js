import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { theme, Main } from "../components/styles";

function AboutUs() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<NavBar></NavBar>
				<Typography variant="h2">About Us</Typography>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default AboutUs;
