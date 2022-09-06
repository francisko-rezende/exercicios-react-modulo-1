import { Footer, Header } from "@components";
import { ProdutosProvider } from "./contexts/ProdutosProvider";
import styles from "./App.module.css";
import { Produtos } from "./pages/produtos";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <ProdutosProvider>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Router />
          </main>
          <Footer />
        </div>
      </ProdutosProvider>
    </BrowserRouter>
  );
}

export default App;
