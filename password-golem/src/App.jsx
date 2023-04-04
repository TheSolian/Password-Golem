import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../redux/store'
import { auth } from './firebase/config'
import AddCredentialPage from './pages/AddCredentialPage'
import CredentialPage from './pages/CredentialPage'
import GeneratorPage from './pages/GeneratorPage'
import Layout from './pages/Layout'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import VaultPage from './pages/VaultPage'

function App() {
  const [username, setUsername] = useState(null)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<VaultPage />} />

            <Route path='generator' element={<GeneratorPage />} />
            <Route path='credentials/add' element={<AddCredentialPage />} />
            <Route
              path='credentials/:credentialId'
              element={<CredentialPage />}
            />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
