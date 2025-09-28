"use client";
import { Box, Toolbar, styled, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { DRAWER_WIDTH } from "@/config/constants";
import { useSidebar } from "@/contexts/SidebarContext";

interface LayoutBaseProps {
	children: ReactNode;
}

const BREAKPOINT = "md";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
	isMobile?: boolean;
}>(({ theme, open, isMobile }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: 0,
	...(!isMobile &&
		open && {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: DRAWER_WIDTH,
		}),
	...(isMobile && {
		marginLeft: 0,
	}),
	// ...(open && {
	// 	transition: theme.transitions.create("margin", {
	// 		easing: theme.transitions.easing.easeOut,
	// 		duration: theme.transitions.duration.enteringScreen,
	// 	}),
	// 	marginLeft: DRAWER_WIDTH,
	// }),
}));

export const LayoutBase = ({ children }: LayoutBaseProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT));
	const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

	useEffect(() => {
		if (!isMobile) {
			openSidebar();
		} else {
			closeSidebar();
		}
	}, [isMobile]);

	return (
		<Box sx={{ display: "flex" }}>
			<Navbar isMobile={isMobile} />
			<Sidebar isMobile={isMobile} />
			<Main open={isSidebarOpen} isMobile={isMobile}>
				<Toolbar />
				{children}
			</Main>
		</Box>
	);
};
