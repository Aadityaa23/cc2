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
import React from "react";
import { ContactEmergency, Man, Sick } from "@mui/icons-material";
import { Container } from "@mui/system";
import CCLogo from "./cclogo.png";

import CloseIcon from "@mui/icons-material/Close";
import ManIcon from "@mui/icons-material/Man";
import HouseIcon from "@mui/icons-material/House";
import BusinessIcon from "@mui/icons-material/Business";
import StoreIcon from "@mui/icons-material/Store";

function MyGridItem(props) {
	const body = "";
	const houseFlag = props.HouseFlag ? true : false;
	const busFlag = props.BusFlag ? true : false;

	const corpFlag = props.CorpFlag ? true : false;

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
						{houseFlag ? <HouseIcon sx={{ fontSize: "100px" }} /> : null}
						{busFlag ? <StoreIcon sx={{ fontSize: "100px" }} /> : null}

						{corpFlag ? <BusinessIcon sx={{ fontSize: "100px" }} /> : null}

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
