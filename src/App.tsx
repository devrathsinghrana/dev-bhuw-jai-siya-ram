import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Theme from "./styles/config/Theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const ActiveTheme = Theme(currentTheme);

  return (
    <ThemeProvider theme={ActiveTheme.theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
