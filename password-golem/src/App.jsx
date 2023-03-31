<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import VaultPage from "./pages/VaultPage";
import PasswordGeneratorPage from "./pages/PasswordGenerator";
=======
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../redux/store'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="vault" element={<VaultPage />} />
          <Route path="generator" element={<PasswordGeneratorPage />} />
        </Route>
      </Routes>
=======
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      </Provider>
>>>>>>> Stashed changes
    </BrowserRouter>
  );
}

export default App;
