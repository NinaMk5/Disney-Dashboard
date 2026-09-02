import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.jsx";
import { store } from "./app/store.js";

import { lightTheme, darkTheme } from "./app/theme.js";

import "./index.css";

function Root() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
      </Provider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
