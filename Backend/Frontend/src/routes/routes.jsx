import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Offers from "../pages/Offers/Offers.jsx";
import { legalServices } from "../Data/NavData/NavData.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/:category" element={<Offers />}></Route>
        {legalServices.map((service, index) => (
          <Route
            key={index}
            path={`/${service.urlName}`}
            element={<Offers service={service} />}
          ></Route>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
