import React, { Suspense, useContext, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "@mui/material"
import { lightTheme, darkTheme } from './stylesheet'
import AppProvider from './context/PageProvider'
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={lightTheme}>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
