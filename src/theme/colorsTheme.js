import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colorsTheme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
});
