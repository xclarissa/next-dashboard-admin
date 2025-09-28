import {
    Dashboard as DashboardIcon,
	People as UsersIcon,
	Settings as SettingsIcon,
} from "@mui/icons-material";

export const DRAWER_WIDTH = 240;

export const navItems = [
	{ text: "Dashboard", href: "/dashboard", icon: DashboardIcon },
	{ text: "Usuários", href: "/users", icon: UsersIcon },
	{ text: "Configurações", href: "/settings", icon: SettingsIcon },
];
