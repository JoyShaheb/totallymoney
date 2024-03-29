import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const theme = (theme: any) =>
  theme === "dark" ? darkTheme : lightTheme;
