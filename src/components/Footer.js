import React from "react";
import {
	Button,
	ThemeProvider,
	Box,
	Typography,
	Divider,
	Link,
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
							<Typography sx={{ mt: 2 }}>
								<Link color="secondary.light" href="/">
									Home
								</Link>
							</Typography>
							<Typography sx={{ mt: 2 }}>
								<Link color="secondary.light" href="/aboutus">
									About Us
								</Link>
							</Typography>
							<Typography sx={{ mt: 2 }}>
								<Link color="secondary.light" href="/dac">
									Direct Air Capture
								</Link>
							</Typography>
							<Typography sx={{ mt: 2 }}>
								<Link
									color="secondary.light"
									href="https://nphbdc7fpd8.typeform.com/to/JnhBOLoo?fbclid=IwAR1OCkvEu9eGjv0DPwXMrNCeByHvcIWjabetvIw7ZCee7Gf-TSAdyw3ysjE&typeform-source=l.facebook.com"
									target="_blank"
								>
									Sign Up
								</Link>
							</Typography>
						</Box>
					</Grid>
					<Typography sx={{ mt: 6 }}>Published @ 2023</Typography>
				</Banner>
			</ThemeProvider>
		</React.Fragment>
	);
}
export default Footer;
