import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import ChangePassword from "./forgotpassword";
import Signup from "./signUp";
import ProfilePage from "./profilepage";
import Verifyaccount from "./verifyaccount";
import LandingPage from "./landingpage";
import ProductDetails from "./productDetails";
import Verifypassword from "./Verifypassword";
import "./fonts.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/verifyAccount" element={<Verifyaccount />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/verifyPassword" element={<Verifypassword />} />
      </Routes>
    </Router>
  );
};

export default App;
