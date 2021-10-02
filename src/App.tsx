import React, { useEffect } from "react";
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

function App() {
	const latitude = 52.52;
	const longitude = 13.41;
	const hourly = "temperature_2m";

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
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					color: (theme) => theme.palette.common.white,
					background: (theme) =>
						`linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
				}}
			>
				<Box sx={{}}>
					<Typography variant="h3" sx={{}}>
						Previsão do tempo
					</Typography>
				</Box>
				<Box sx={{}}>
					<TextField
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
					<Typography variant="h3" sx={{}}>
						Previsão do tempo
					</Typography>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Divider light sx={{ flex: 1 }} />
				</Box>
				<Box sx={{}}>
					<Typography variant="h3" sx={{}}>
						Previsão do tempo
					</Typography>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
