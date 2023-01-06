import { ThemeProvider } from "@emotion/react";
import { CardMedia, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { theme, Main } from "../components/styles";
import BannerImage from "../components/forrest.jpg";

function AboutUs() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<NavBar></NavBar>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default AboutUs;
