import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createTheme({
	palette: {
		common: {
			white: "#FFF",
			black: "#000",
		},
		primary: {
			main: orange[400],
			light: orange[200],
			dark: orange[800],
			contrastText: "#FFF",
		},
	},
	typography: {
		h1: {
			fontFamily: "Open Sans",
		},
		h2: {
			fontFamily: "Open Sans",
		},
		h3: {
			fontFamily: "Open Sans",
		},
		h4: {
			fontFamily: "Open Sans",
		},
		h5: {
			fontFamily: "Open Sans",
		},
	},
});

export default theme;
