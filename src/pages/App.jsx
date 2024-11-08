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
import CategoryPage from "../components/ItemListPage";
import "./fonts.css";

const App = () => {
  const basePath = import.meta.env.MODE === 'production' ? '' : '';


  const allItems = {
    floorItems: [
      {
        id: 1,
        title: "light shade butterscotch oak 1",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/bitcoin-icons_menu-filled.png`,
      },
      {
        id: 2,
        title: "shade butterscotch 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/dark-brown.png`,
      },
      {
        id: 3,
        title: "shade butterscotch 3",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/light-brown.png`,
      },
      {
        id: 4,
        title: "shade butterscotch 4",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/brown.png`,
      },
      {
        id: 5,
        title: "shade butterscotch 5",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/s-brown.png`,
      },
      {
        id: 6,
        title: "shade butterscotch 5",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/floors/wgite.png`,
      },
    ],

    wallItems: [
      {
        id: 1,
        title: "Brick Wall 1",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/walls/Rectangle 39.png`,
      },
      {
        id: 2,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/walls/red.png`,
      },
      {
        id: 3,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/walls/blue.png`,
      },
      {
        id: 4,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/walls/Rectangle 39.png`,
      },
    ],

    sinkItems: [
      {
        id: 1,
        title: "Brick Wall 1",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/skins/skin.png`,
      },
      {
        id: 2,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/skins/ovel-sink.png`,
      },
      {
        id: 3,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/skins/black-sink.png`,
      },
      {
        id: 4,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/skins/skin.png`,
      },
    ],

    facItems: [
      {
        id: 1,
        title: "Brick Wall 1",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/faucets/faucet-1.png`,
      },
      {
        id: 2,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/faucets/faucet-2.png`,
      },
      {
        id: 3,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/faucets/faucet-3.png`,
      },
      {
        id: 4,
        title: "Wood Panel Wall 2",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/faucets/faucet-1.png`,
      },
    ],

    kitchenItems: [
      {
        id: 1,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/kitchen/kitchen 1.png`,
      },
      {
        id: 2,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/kitchen/kitchen-2.png`,
      },
      {
        id: 3,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/kitchen/kitchen-3.png`,
      },
      {
        id: 4,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/landingpage/kitchen/kitchen 1.png`,
      },
    ],

    shrubItems: [
      {
        id: 1,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 39.png`,
      },
      {
        id: 2,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 40.png`,
      },
      {
        id: 3,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle-41.png`,
      },
      {
        id: 4,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 39.png`,
      },
    ],

    pavementItems: [
      {
        id: 1,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 39 (1).png`,
      },
      {
        id: 2,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 40 (1).png`,
      },
      {
        id: 3,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 41.png`,
      },
      {
        id: 4,
        title: "",
        imgSrc: `${import.meta.env.BASE_URL}assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 40 (1).png`,
      },
    ],
  };

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
        <Route
          path="/:category"
          element={<CategoryPage allItems={allItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
