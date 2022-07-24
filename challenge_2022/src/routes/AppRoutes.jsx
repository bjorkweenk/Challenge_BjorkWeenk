import React from "react";
import { Routes, Route } from "react-router-dom";

import App from '../App'
import NotFound from "../components/NotFound/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/notfound" element={<NotFound />}/>
    </Routes>
  );
};

export default AppRoutes;