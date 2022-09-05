import PropTypes from "prop-types";
import { useState } from "react";
import { ProdutosContext } from "./ProductsContext";

export const ProdutosProvider = ({ children }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const handleSelecionar = (produto) => {
    const foiSelecionado = produtosSelecionados.some(
      (idProduto) => idProduto === produto.id
    );

    if (foiSelecionado) {
      setProdutosSelecionados((produtos) =>
        produtos.filter((produtoEstado) => produtoEstado.id !== produto.id)
      );
      return;
    }

    setProdutosSelecionados((produtos) => [...produtos, produto]);
  };

  const ehCardSelecionado = (cardId) =>
    produtosSelecionados.some(({ id }) => id === cardId);

  return (
    <ProdutosContext.Provider
      value={{ produtosSelecionados, handleSelecionar, ehCardSelecionado }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

ProdutosProvider.propTypes = {
  children: PropTypes.node,
};
