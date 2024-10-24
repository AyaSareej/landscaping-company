// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import ChangePassword from "./pages/forgotpassword";
import Signup from "./pages/signUp"; // Make sure this path is correct
import ProfilePage from "./pages/profilepage"; // Adjust the path as needed
import "./fonts.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
