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
import React from "react";
import { ContactEmergency } from "@mui/icons-material";
import { Container } from "@mui/system";

function MyBanner(props) {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	var currHeight = isMobile ? 400 : 550;
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
					<div
						style={{
							position: "relative",
							opacity: 0.6,
							minWidth: "100%",
							minHeight: "100%",
						}}
					>
						<CardMedia
							component="img"
							image={props.BannerImage}
							sx={{ height: currHeight }}
						/>
					</div>
					<Box
						style={{
							position: "absolute",
						}}
						sx={{
							backgroundClip: theme.palette.primary.main,
						}}
					>
						<Typography
							gutterBottom
							textAlign="center"
							variant="h2"
							color="white"
							fontSize={titleFontSize}
						>
							{props.title}
						</Typography>
						<Typography
							fontSize={tagFontSize}
							gutterBottom
							variant="h5"
							textAlign="center"
						>
							{props.tagline}
						</Typography>
					</Box>
				</Box>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyBanner;
