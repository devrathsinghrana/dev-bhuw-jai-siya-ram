import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/AppRoutes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Theme from "./styles/config/Theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const ActiveTheme = Theme(currentTheme);
  const GlobalStylesTheme = ActiveTheme.global;

  return (
    <ThemeProvider theme={ActiveTheme.theme}>
      <GlobalStylesTheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
