"use client"

import React from 'react'
import { Box, BoxProps } from "@mui/material";

export const Container = (props: BoxProps ) => {
    return (
        <Box
            {...props}
            sx={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: 2,
                ...props.sx,
            }}
        />
    )
}
