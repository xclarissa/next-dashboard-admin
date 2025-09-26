import Image from "next/image";
import { Button, Typography, Paper } from "@mui/material";

export default function Home() {
	return (
		<Paper elevation={2}>
			<Typography variant="h1">Dashboard Admin</Typography>
			<Button variant="contained" color="primary">
				Botão Primário
			</Button>
			<Button variant="outlined" color="secondary">
				Botão Secundário
			</Button>
		</Paper>
	);
}
