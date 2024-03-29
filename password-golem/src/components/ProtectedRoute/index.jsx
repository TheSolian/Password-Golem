import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Component /> : <Navigate to='/login' replace />
      }
    />
  )
}

export default ProtectedRoute
