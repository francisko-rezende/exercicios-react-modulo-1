import { useProducts } from "../../hooks/useProducts";
import React from "react";
import { ListaCards } from "@components";

const getValorTotal = (produtos) =>
  produtos.reduce((acc, { valor }) => acc + valor, 0);

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProducts();

  const valorTotal = getValorTotal(produtosSelecionados);

  return (
    <>
      <h1>Produtos selecionados</h1>
      <p>Valor total: {`R$ ${valorTotal.toFixed(2).replace(".", `,`)}`}</p>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
