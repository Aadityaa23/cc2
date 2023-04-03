import {
	Box,
	CardMedia,
	Typography,
	Card,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import { theme, Banner, BorderDivider } from "./styles";
import { useMediaQuery } from "react-responsive";
import React from "react";
import { ContactEmergency } from "@mui/icons-material";
import { Container } from "@mui/system";

function MyBanner(props) {
	const isMobile = useMediaQuery({ query: `(max-width: 550px)` });
	var currHeight = isMobile ? 450 : 500;
	var currWidth = isMobile ? 3 : 15;

	var currLogo = isMobile ? "column" : "row";
	var titleFontSize = isMobile ? "50px" : "80px";
	var tagFontSize = "20px";
	var typVar = props.tagline ? "h3" : "h2";

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
							textAlign: "center",
							maxWidth: 700,
							p: 2,
						}}
					>
						<Typography gutterBottom variant={typVar} color="white">
							{props.title}
						</Typography>
						<Box sx={{ px: isMobile ? 5 : 10 }}>
							<Typography
								variant="body"
								fontSize={tagFontSize}
								sx={{ color: theme.palette.secondary.light }}
							>
								{props.tagline}
							</Typography>
						</Box>
					</Box>
				</Box>
				<BorderDivider></BorderDivider>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyBanner;
