import { Footer, Header, Secao, FiltroSecao } from "@components";
import produtos from "@services/produtos.json";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(
    produtos.principais.map((p) => p.subSecao)
  );

  const [secaoSelecionada, setSecaoSelecionada] = useState(null);

  const secoes = [
    {
      nome: "Entradas",
      produtos: produtos.entradas,
      subSecoes: subSecoesEntradas,
    },
    {
      nome: "Principais",
      produtos: produtos.principais,
      subSecoes: subSecoesPrincipais,
    },
    {
      nome: "Sobremesas",
      produtos: produtos.sobremesas,
    },
  ];

  const handleSelecionarSecao = (titulo) => {
    const valorSelecionadoEhIgualAoArg = secaoSelecionada === titulo;
    setSecaoSelecionada(valorSelecionadoEhIgualAoArg ? null : titulo);
  };

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={secoes} onSelecionarSecao={handleSelecionarSecao} />
      <main className={styles.main}>
        {secaoSelecionada
          ? secoes
              .filter((secao) => secao.nome === secaoSelecionada)
              .map((secao) => (
                <Secao
                  key={secao.nome}
                  nome={secao.nome}
                  produtos={secao.produtos}
                  subSecoes={
                    secao.subSecoes ? Array.from(secao.subSecoes) : null
                  }
                />
              ))
          : secoes.map((secao) => (
              <Secao
                key={secao.nome}
                nome={secao.nome}
                produtos={secao.produtos}
                subSecoes={secao.subSecoes ? Array.from(secao.subSecoes) : null}
              />
            ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
