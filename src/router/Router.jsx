import { Produtos } from "../pages/produtos";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProdutosSelecionados } from "../pages/ProdutosSelectionados";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Produtos />} path="/" />
      <Route element={<ProdutosSelecionados />} path="minhas-escolhas" />
    </Routes>
  );
};
