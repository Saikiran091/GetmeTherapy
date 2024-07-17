import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../components/Dashboard";
import Onboarding from "../components/Onboarding";
import Welcome from "../components/welcome";
import ClockPage from "../components/ClockPage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        {/* <Route path="/onboarding" element={<Onboarding />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
