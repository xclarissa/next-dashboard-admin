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
} from "@mui/material";
import Link from "next/link";
import { useSidebar } from "../../contexts/SidebarContext";
import { usePathname } from 'next/navigation';
import { DRAWER_WIDTH, navItems } from "@/config/constants";

export const Sidebar = () => {
	const { isSidebarOpen } = useSidebar();
	const currentPathname = usePathname(); 

	return (
		<Drawer
			variant="persistent"
			anchor="left"
			open={isSidebarOpen}
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: DRAWER_WIDTH,
					boxSizing: "border-box",
				},
			}}
		>
			<Toolbar />
			<Divider />
			<List>
				{navItems.map((item) => (
					<Link href={item.href} key={item.text} passHref>
						<ListItem disablePadding>
							<ListItemButton
								selected={currentPathname === item.href}
							>
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
