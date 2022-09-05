import React from "react";
import PropTypes from "prop-types";

export const FiltroSecao = ({ secoes, onSelecionarSecao }) => {
  return (
    <div>
      {secoes.map(({ nome }) => (
        <button onClick={() => onSelecionarSecao(nome)}>{nome}</button>
      ))}
    </div>
  );
};

FiltroSecao.propTypes = {
  secoes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      produtos: PropTypes.array.isRequired,
      subSecoes: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  onSelecionarSecao: PropTypes.func.isRequired,
};
