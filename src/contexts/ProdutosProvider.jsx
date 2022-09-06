import PropTypes from "prop-types";
import { useState } from "react";
import { ProdutosContext } from "./ProductsContext";

export const ProdutosProvider = ({ children }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const onSelecionar = (produto) => {
    const foiSelecionado = produtosSelecionados.some(
      ({ id }) => id === produto.id
    );

    if (foiSelecionado) {
      setProdutosSelecionados((produtos) =>
        produtos.filter(({ id }) => id !== produto.id)
      );
      return;
    }

    setProdutosSelecionados((produtos) => [...produtos, produto]);
  };

  const ehCardSelecionado = (cardId) =>
    produtosSelecionados.some(({ id }) => id === cardId);

  return (
    <ProdutosContext.Provider
      value={{ produtosSelecionados, onSelecionar, ehCardSelecionado }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

ProdutosProvider.propTypes = {
  children: PropTypes.node,
};
