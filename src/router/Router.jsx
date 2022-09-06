import { Produtos } from "../pages/produtos";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Produtos />} path="/" />
    </Routes>
  );
};
