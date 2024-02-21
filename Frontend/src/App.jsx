// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/authentication/Register";
import LoginPage from "./pages/authentication/Login";
import ResetPasswordConfirmPage from "./pages/authentication/ResetPasswordConfirm";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
import ActivateAccountPage from "./pages/authentication/ActivateAccount";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/activate-account" element={<ActivateAccountPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/reset-password-confirm"
          element={<ResetPasswordConfirmPage />}
        />
      </Routes>
    </Router>
  );
}

export default App