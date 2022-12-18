import { styled, createTheme } from "@mui/material/styles";
import {
	Card,
	Container,
	Box,
	Typography,
	Divider,
	Grid,
	Backdrop,
} from "@mui/material";
import { ThemeContext } from "@emotion/react";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#00008B", // dark pink/red
			light: "#ADD8E6", // light pink
		},
		secondary: {
			main: "#ADD8E6", // Turquoise
			light: "#96F4E4", // Light turquoise
		},
		info: {
			main: "#F8F8F8", // light grey
			dark: "#6F6457", // darker gray
		},
	},
	typography: {
		logo: {
			fontFamily: ["Kaushan Script", "cursive"].join(","),
		},
	},
});

export const MyCard = styled(Card)({
	backgroundColor: "blue",
	display: "flex",
	flxDirection: "column",
});

export const Main = styled("main")({
	backgroundColor: theme.palette.info.main,
});

export const Logo = styled("span")({
	fontFamily: theme.typography.logo.fontFamily,
	color: theme.palette.primary.main,
});

export const Banner = styled(Card)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: theme.palette.info.dark,
	justifyContent: "center",
	textAlign: "center",
	height: 400,
	marginTop: 20,
});

export const HighlightText = styled(Typography)({
	color: theme.palette.secondary.main,
	variant: "subtitle1",
});

export const BorderDivider = styled(Divider)({
	backgroundColor: theme.palette.primary.main,
	borderBottomWidth: 2,
});
