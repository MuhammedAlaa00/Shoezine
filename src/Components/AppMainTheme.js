import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../App.css";
import { UseTheme } from "../Contexts/ThemeContext";
function AppMainTheme({ children }) {
  const { Theme } = UseTheme();
  const theme = createMuiTheme({
    palette: {
      type: Theme ? "dark" : "light",
      primary: {
        main: "#1b5e20",
      },
      secondary: {
        main: "#1F9B37",
      },
    },
  });
  const app = {
    background: theme.palette.background.default,
  };
  if (theme.palette.type === "light") {
    app.background = theme.palette.background.paper;
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={app}>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default React.memo(AppMainTheme);
