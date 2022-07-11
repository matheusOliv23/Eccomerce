// import { createTheme } from "@mui/material";

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#141a29",
//     },
//   },
// });
import { createTheme } from "@mui/material";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1A40",
    },
    secondary: {
      main: "#0f0",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    body2: {
      fontFamily: "Roboto",
      fontSize: "1.1rem",
    },
  },
});
