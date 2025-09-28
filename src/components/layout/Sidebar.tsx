"use client";

import {
	Drawer,
	Toolbar,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
	Typography,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import { useSidebar } from "../../contexts/SidebarContext";
import { usePathname } from "next/navigation";
import { DRAWER_WIDTH, navItems } from "@/config/constants";

interface SidebarProps {
	isMobile: boolean;
}

export const Sidebar = ({ isMobile }: SidebarProps) => {
	const { isSidebarOpen, closeSidebar } = useSidebar();
	const currentPathname = usePathname();

	return (
		<Drawer
			variant={isMobile ? "temporary" : "persistent"}
			anchor="left"
			open={isSidebarOpen}
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: DRAWER_WIDTH,
					boxSizing: "border-box",
					...(!isMobile && {
						position: "relative",
						height: "100vh",
					}),
				},
			}}
		>
			<Toolbar sx={{
				gap: 3
			}}>
				<LocalMallIcon />
				<Typography variant="h5" noWrap component="div">
					Stockly
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{navItems.map((item) => (
					<Link href={item.href} key={item.text} passHref>
						<ListItem disablePadding>
							<ListItemButton selected={currentPathname === item.href}>
								<ListItemIcon>
									<item.icon />
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
		</Drawer>
	);
};
