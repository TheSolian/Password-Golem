import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import VaultPage from "./pages/VaultPage";
import PasswordGeneratorPage from "./pages/PasswordGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="vault" element={<VaultPage />} />
          <Route path="generator" element={<PasswordGeneratorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
