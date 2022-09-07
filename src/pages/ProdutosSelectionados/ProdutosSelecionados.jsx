import { useProducts } from "../../hooks/useProducts";
import React from "react";
import { ListaCards } from "@components";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProducts();

  return (
    <>
      <h1>Produtos selecionados</h1>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
