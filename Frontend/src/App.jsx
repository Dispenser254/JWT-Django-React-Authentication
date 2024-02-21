// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/authentication/Register";
import LoginPage from "./pages/authentication/Login";
import ResetPasswordConfirmPage from "./pages/authentication/ResetPasswordConfirm";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
import ActivateAccountPage from "./pages/authentication/ActivateAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./pages/NotFoundPage";
import NavbarPage from "./components/Navbar";
import DashboardPage from "./pages/Dashboard";

export const App = () => {
  return (
    <>
      <Router>
        <NavbarPage />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/activate/:uid/:token"
            element={<ActivateAccountPage />}
          />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirmPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
