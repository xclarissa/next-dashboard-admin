"use client"

import React from 'react'
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export const Typography = (props: TypographyProps) => {
    return (
        <MuiTypography
            {...props}
            sx={{
                fontFamily: "Roboto, Arial, sans-serif",
                lineHeight: 1.5,
                ...props.sx,
            }}
        />
    )
}
