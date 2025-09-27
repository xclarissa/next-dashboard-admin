"use client"

import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button = (props: ButtonProps) => {
	return (
		<MuiButton
			disableElevation
			{...props}
			sx={{
				borderRadius: 8,
				textTransform: "none",
				fontWeight: 600,
				...props.sx,
			}}
		/>
	);
};
