import React, { useState, useContext, useEffect } from "react";
import {
	Button,
	CssBaseline,
	Stack,
	Card,
	CardContent,
	ThemeProvider,
	Typography,
	Rating,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
} from "@mui/material";
import { theme } from "./styles";

function MyDialog(props) {
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			sx={{ textAlign: "center" }}
		>
			<DialogTitle variant="h4">
				<Typography variant="h5">
					Carbon Coins aren't available for purchase yet.
				</Typography>
			</DialogTitle>
			<DialogContent>
				<Typography variant="subtitle1">
					Sign up below to become part of our mailing list, and stay updated
					with our progress. Testing firebase again
				</Typography>
			</DialogContent>
			<DialogActions
				sx={{
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<Button
					variant="outlined"
					href="https://nphbdc7fpd8.typeform.com/to/JnhBOLoo?fbclid=IwAR1OCkvEu9eGjv0DPwXMrNCeByHvcIWjabetvIw7ZCee7Gf-TSAdyw3ysjE&typeform-source=l.facebook.com"
					target="_blank"
				>
					<Typography>Sign Up</Typography>
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default MyDialog;
