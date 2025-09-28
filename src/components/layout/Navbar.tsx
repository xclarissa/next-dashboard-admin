import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSidebar } from "../../contexts/SidebarContext";
import { DRAWER_WIDTH } from "@/config/constants";

export const Navbar = () => {
	const { isSidebarOpen, toggleSidebar } = useSidebar();

	return (
		<AppBar
			position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				transition: (theme) =>
					theme.transitions.create(["width", "margin"], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					}),
				...(isSidebarOpen && {
					marginLeft: DRAWER_WIDTH,
					width: `calc(100% - ${DRAWER_WIDTH}px)`,
					transition: (theme) =>
						theme.transitions.create(["width", "margin"], {
							easing: theme.transitions.easing.easeOut,
							duration: theme.transitions.duration.enteringScreen,
						}),
				}),
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={toggleSidebar}
					edge="start"
					sx={{
						marginRight: 5,
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Admin Dashboard
				</Typography>

				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit">
					<AccountCircle />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
