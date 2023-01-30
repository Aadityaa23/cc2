import {
	Box,
	CardMedia,
	Typography,
	Card,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import { theme, Banner } from "./styles";
import { useMediaQuery } from "react-responsive";
import BannerImage from "../components/forrest.jpg";
import React from "react";
import { ContactEmergency } from "@mui/icons-material";
import { Container } from "@mui/system";

function MyBanner() {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	var currHeight = isMobile ? 400 : 450;
	var currWidth = isMobile ? 3 : 15;

	var currLogo = isMobile ? "column" : "row";
	var titleFontSize = isMobile ? "50px" : "80px";
	var tagFontSize = isMobile ? "20px" : "25px";

	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Box
					display="flex"
					direction="column"
					alignContent="center"
					alignItems="center"
					justifyContent="center"
					sx={{
						height: currHeight,
					}}
				>
					<CardMedia
						component="img"
						image={BannerImage}
						sx={{ height: currHeight }}
					/>
					<div
						style={{
							position: "absolute",
						}}
					>
						<Typography
							gutterBottom
							textAlign="center"
							variant="h2"
							color="white"
							fontSize={titleFontSize}
						>
							Carbon Coin
						</Typography>
						<Typography
							fontSize={tagFontSize}
							gutterBottom
							variant="h5"
							textAlign="center"
						>
							Using Crypto to Combat Climate Change
						</Typography>
					</div>
				</Box>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyBanner;
