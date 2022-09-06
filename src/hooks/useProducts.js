import { ProdutosContext } from "../contexts/ProductsContext";
import { useContext } from "react";

export const useProducts = () => {
  const { produtosSelecionados, onSelecionar, ehCardSelecionado } =
    useContext(ProdutosContext);

  return { produtosSelecionados, onSelecionar, ehCardSelecionado };
};
