import React, { useEffect, useState } from "react";
import {
	Box,
	ThemeProvider,
	Typography,
	TextField,
	Divider,
	InputAdornment,
} from "@material-ui/core";
import "./global.css";
import { http } from "./config";
import theme from "./themes/default";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function App() {
	const [show, setShow] = React.useState(true);

	const latitude = 52.52;
	const longitude = 13.41;
	const hourly = "temperature_2m";

	const container = React.useRef(null);

	useEffect(() => {
		/*
		http(`?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`).then(
			(res) => {
				console.log(res.data);
			}
		);
    	*/
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					background: (theme) =>
						`linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: "20px",
						p: "1rem",
						color: (theme) => theme.palette.common.white,
					}}
				>
					<Box sx={{}}>
						<Typography variant="h5" sx={{}}>
							Previsão do tempo
						</Typography>
					</Box>

					{show ? (
						<Box
							sx={{
								display: "flex",
								width: "100%",
								flexDirection: "column",
								gap: "0.5rem",
								p: "0.5rem",
								m: "0.5rem",
								boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
								backgroundColor: (theme) => theme.palette.common.white,
							}}
						>
							<Box sx={{ display: "flex" }}>
								<Typography>lorem ipsum dolor</Typography>
								<GrClose />
							</Box>
							<Box sx={{}}>Resultado Busca Aqui</Box>
							<Box sx={{}}>Resultado Busca Aqui</Box>
							<Box sx={{}}>Resultado Busca Aqui</Box>
							<Box sx={{}}>Resultado Busca Aqui</Box>
							<Box sx={{}}>Resultado Busca Aqui</Box>
						</Box>
					) : null}

					<Box>
						<TextField
							size="small"
							fullWidth
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconContext.Provider value={{ color: "black" }}>
											<FaSearch />
										</IconContext.Provider>
									</InputAdornment>
								),
							}}
						/>
					</Box>

					<Box sx={{}}>
						<Typography variant="body1" sx={{}}>
							Previsão do tempo
						</Typography>
					</Box>

					<Box sx={{ display: "flex" }}>
						<Divider light sx={{ flex: 1 }} />
					</Box>

					<Box sx={{}}>
						<Typography variant="h5" sx={{}}>
							Previsão do tempo
						</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
