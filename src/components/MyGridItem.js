import {
	Box,
	CardMedia,
	Typography,
	Card,
	CssBaseline,
	ThemeProvider,
	Grid,
} from "@mui/material";
import { theme, Banner } from "./styles";
import { useMediaQuery } from "react-responsive";
import BannerImage from "../components/forrest.jpg";
import React from "react";
import { ContactEmergency, Man } from "@mui/icons-material";
import { Container } from "@mui/system";
import CCLogo from "./cclogo.png";

import CloseIcon from "@mui/icons-material/Close";
import ManIcon from "@mui/icons-material/Man";

function MyGridItem(props) {
	const body = "";

	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={4}
					xl={2}
					sx={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Card
						sx={{
							display: "flex",
							flexDirection: "column",
							p: 3,
							border: 2,
							borderColor: theme.palette.primary.light,
							backgroundColor: theme.palette.secondary.main,
							color: theme.palette.primary.light,
							height: 250,
							width: 1000,
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<CardMedia
							component="img"
							src="https://www.flaticon.com/free-icon/home-button_5974636?term=house&page=1&position=4&origin=search&related_id=5974636"
							height="100"
						/>
						<Typography variant="h3" textAlign="center">
							{props.title}
						</Typography>
						<Typography variant="p">{props.body}</Typography>
					</Card>
				</Grid>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyGridItem;
