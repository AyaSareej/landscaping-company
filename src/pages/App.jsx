// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import ChangePassword from "./forgotpassword";
import Signup from "./signUp"; // Make sure this path is correct
import ProfilePage from "./profilepage"; // Adjust the path as needed
import Verifyaccount from "./verifyaccount";
import LandingPage from "./landingpage";
import "./fonts.css";
import ProductDetails from "./productDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/verifyAccount" element={<Verifyaccount />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
