import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppProvider from './context/PageProvider'
import ThemeProvider from "./stylesheet/ThemeProvider"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider>
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
