import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0044B3",
			light: "#3366CC",
			dark: "#003399",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#FF6B00",
			light: "#FF944D",
			dark: "#CC5500",
			contrastText: "#FFFFFF",
		},
		background: {
			default: "#F9FAFB",
			paper: "#FFFFFF",
		},
		text: {
			primary: "#1A1A1A",
			secondary: "#4D4D4D",
		},
	},
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
		h1: {
			fontSize: "2.5rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		h3: {
			fontSize: "1.75rem",
			fontWeight: 600,
		},
		body1: {
			fontSize: "1rem",
		},
		body2: {
			fontSize: "0.875rem",
			color: "#4D4D4D",
		},
		button: {
			textTransform: "none",
			fontWeight: 600,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: "8px 16px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					padding: "16px",
				},
			},
		},
	},
});

export default theme;
