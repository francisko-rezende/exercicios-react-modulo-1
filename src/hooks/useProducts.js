import { ProdutosContext } from "contexts/ProductsContext";
import { useContext } from "React";

export const useProducts = () => {
  const { produtosSelecionados, handleSelecionar, ehCardSelecionado } =
    useContext(ProdutosContext);

  return { produtosSelecionados, handleSelecionar, ehCardSelecionado };
};
