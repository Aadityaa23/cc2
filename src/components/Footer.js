import React from "react";
import {
	Button,
	ThemeProvider,
	Box,
	Typography,
	Divider,
	Grid,
} from "@mui/material";
import { theme, HighlightText, BorderDivider, Banner } from "./styles";
import { useMediaQuery } from "react-responsive";

function Footer(props) {
	const isMobile = useMediaQuery({ query: `(max-width: 850px)` });

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<BorderDivider></BorderDivider>

				<Banner
					sx={{
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.light,
						height: { xs: 650, md: 400 },
					}}
				>
					<Grid
						container
						sx={{
							justifyContent: "space-around",
							p: 3,
						}}
					>
						<Box
							sx={{
								width: 400,
								textAlign: "center",
							}}
						>
							<Typography variant="h5">Carbon Coin</Typography>
							<br></br>
							<Typography>
								If you have any questions or concerns, feel free to contact us
								at carboncoin.cc@gmail.com
							</Typography>
							<br></br>
							<Typography>We are always happy to hear feedback</Typography>
						</Box>
						<Box
							sx={{
								width: 400,
								textAlign: "center",
								mt: {
									xs: 4,
									md: 0,
								},
							}}
						>
							<Typography variant="h5">Quick Links:</Typography>
							<Typography sx={{ mt: 2 }}>Aadityaa Gupta</Typography>
							<Typography sx={{ mt: 1 }}>Saifullah Ndubano</Typography>
							<Typography sx={{ mt: 1 }}>Quoc Hoang Nguyen</Typography>
							<Typography sx={{ mt: 1 }}>Quynh Anh Nguyen</Typography>
							<Typography sx={{ mt: 1 }}>Eric Shi</Typography>
						</Box>
					</Grid>
					<Typography sx={{ mt: 6 }}>Published @ 2023</Typography>
				</Banner>
			</ThemeProvider>
		</React.Fragment>
	);
}
export default Footer;
