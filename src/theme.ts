import { createTheme } from "@mui/material/styles";

const colors = {
	primary: "#023047", // Blue/Navy Dark
	secondary: "#219ebc", // Deep Cyan
	info: "#8ecae6", // Light Sky Blue (Para informações e backgrounds leves)
	warning: "#ffb703", // Golden Yellow
	error: "#fb8500", // Deep Orange (Usado como erro para urgência)
	success: "#28a745", // Mantendo o verde tradicional para sucesso/OK
};

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: colors.primary,
			light: "#315e71",
			dark: "#001c29",
			contrastText: "#ffffff",
		},
		secondary: {
			main: colors.secondary,
			light: "#4faec6",
			dark: "#007090",
			contrastText: "#ffffff",
		},

		error: {
			main: colors.error,
			contrastText: "#ffffff",
		},
		success: {
			main: colors.success,
			contrastText: "#ffffff",
		},
		info: {
			main: colors.info,
			contrastText: colors.primary,
		},
		warning: {
			main: colors.warning,
			contrastText: colors.primary,
		},

		background: {
			default: "#f8f9fa",
			paper: "#ffffff",
		},
	},

	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: colors.primary,
					boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
				},
			},
		},

		MuiIconButton: {
			styleOverrides: {
				root: {
					color: colors.primary,
				},
			},
		},

		MuiListItemButton: {
			styleOverrides: {
				root: {
					"&.Mui-selected": {
						backgroundColor: colors.primary,
						color: "#ffffff",
						"& .MuiListItemIcon-root": {
							color: "#ffffff",
						},
						"&:hover": {
							backgroundColor: colors.primary,
							opacity: 0.9,
						},
					},
					"&:hover": {
						backgroundColor: colors.info + "20",
					},
				},
			},
		},

		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
				},
			},
		},
	},
});

export default theme;
