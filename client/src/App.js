import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppProvider from './context/PageProvider'
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App({ t }) {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
