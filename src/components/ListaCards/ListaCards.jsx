import PropTypes from "prop-types";
import { useState } from "react";

import { Card } from "@components";

import styles from "./ListaCards.module.css";

export const ListaCards = ({ produtos }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card produto={produto} />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
