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

	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Box
					display="flex"
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{
						height: currHeight,
						mt: 1,
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
						<>
							<Typography variant="h1" color="white">
								Carbon Coin
							</Typography>
						</>
					</div>
				</Box>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyBanner;
