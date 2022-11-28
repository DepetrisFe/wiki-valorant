import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "./index.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
