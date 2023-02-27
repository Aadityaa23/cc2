import { ThemeProvider } from "@emotion/react";
import { CardMedia, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { theme, Main } from "../components/styles";
import BannerImage from "../components/forrest.jpg";
import BanImage from "../components/team.jpg";
import MyBanner from "../components/MyBanner";

function AboutUs() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Main>
					<NavBar></NavBar>
					<MyBanner title="About Us" BannerImage={BanImage}></MyBanner>
				</Main>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default AboutUs;
