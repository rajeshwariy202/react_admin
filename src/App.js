import React, { useState } from "react";
import { Routes, Route,  } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Basava from "./scenes/basava";
import Raju from "./scenes/raju";
import Login from "./scenes/login";
import PrivateRoute from "../src/PrivateRoute";

function App() {
  const [theme, colorMode] = useMode();
  const [isAuthenticated] = useState(false); // Replace with your authentication logic
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
          
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Login />} />
                <Route path="/team" element={<Team />} />
                <Route path="/basava" element={<Basava />} />
                <Route path="/raju" element={<Raju />} />

                {/* Private routes */}
                <PrivateRoute
                  path="/dashboard"
                  element={<Dashboard />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/contacts"
                  element={<Contacts />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/invoices"
                  element={<Invoices />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/form"
                  element={<Form />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/bar"
                  element={<Bar />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/pie"
                  element={<Pie />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/line"
                  element={<Line />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/faq"
                  element={<FAQ />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/calendar"
                  element={<Calendar />}
                  isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                  path="/geography"
                  element={<Geography />}
                  isAuthenticated={isAuthenticated}
                />
              </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
