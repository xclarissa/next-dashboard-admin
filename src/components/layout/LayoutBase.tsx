"use client";
import { Box, Toolbar, styled } from "@mui/material";
import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { DRAWER_WIDTH } from "@/config/constants";
import { useSidebar } from "@/contexts/SidebarContext";

interface LayoutBaseProps {
	children: ReactNode;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: 0,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: DRAWER_WIDTH,
	}),
}));

export const LayoutBase = ({ children }: LayoutBaseProps) => {
	const { isSidebarOpen } = useSidebar();

	return (
		<Box sx={{ display: "flex" }}>
			<Navbar />
			<Sidebar />
			<Main open={isSidebarOpen}>
				<Toolbar />
				{children}
			</Main>
		</Box>
	);
};
