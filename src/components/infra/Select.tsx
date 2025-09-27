"use client";

import React from "react";
import { TextField, MenuItem, TextFieldProps } from "@mui/material";

interface Option {
	label: string;
	value: string | number;
}

interface SelectProps extends Omit<TextFieldProps, "select"> {
	options: Option[];
}

export const Select = ({ options, ...props }: SelectProps) => {
	return (
		<TextField select {...props} fullWidth margin="normal">
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};