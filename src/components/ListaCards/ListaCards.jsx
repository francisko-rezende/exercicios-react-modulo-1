import PropTypes from "prop-types";
import { useState } from "react";

import { Card } from "@components";

import styles from "./ListaCards.module.css";

export const ListaCards = ({ produtos }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const handleSelecionar = (id) => {
    const foiSelecionado = produtosSelecionados.some(
      (idProduto) => idProduto === id
    );

    if (foiSelecionado) {
      setProdutosSelecionados((ids) =>
        ids.filter((idSelecionado) => idSelecionado !== id)
      );
      return;
    }

    setProdutosSelecionados((ids) => [...ids, id]);
  };

  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            selecionado={produtosSelecionados.some(
              (idProduto) => idProduto === produto.id
            )}
            onSelecionar={() => handleSelecionar(produto.id)}
          />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
