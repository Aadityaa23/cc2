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
			main: "#263169", // mid blue
			light: "#FFFFFF", // white
		},
		secondary: {
			main: "#495579", // lighter blue
			light: "#FFFFFF", // Light grey
		},
		info: {
			main: "#1C1B37", // darkest blue
			dark: "#70738C", // darker gray
			light: "#FFFFFF",
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
	color: theme.palette.primary.light,
});

export const Logo = styled("span")({
	fontFamily: theme.typography.logo.fontFamily,
	color: theme.palette.primary.main,
});

export const Banner = styled(Card)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: theme.palette.info.main,
	justifyContent: "center",
	textAlign: "center",
	height: 400,
	backgroundPosition: "center",
});

export const HighlightText = styled(Typography)({
	color: theme.palette.secondary.main,
	variant: "subtitle1",
});

export const BorderDivider = styled(Divider)({
	backgroundColor: theme.palette.primary.light,
	borderBottomWidth: 2,
});
