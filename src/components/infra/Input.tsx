"use client"

import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const Input = (props: TextFieldProps) => {
	return (
		<TextField
			{...props}
			variant="outlined"
			margin="normal"
			fullWidth
			sx={{
				borderRadius: 4,
				...props.sx,
			}}
		/>
	);
};
