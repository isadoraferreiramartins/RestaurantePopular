import "./CSS/global.css";
import "./App.jsx";
import Header from "./componentes/header";
import Pageinicio from "./componentes/Pageinicio.jsx";
import Pagevantagens from "./componentes/Pagevantagens.jsx";
import Pagecardapio from "./componentes/Pagecardapio.jsx";
import Pagesobre from "./componentes/Pagesobre.jsx";
import Pagelocalizacao from "./componentes/Pagelocalizacao.jsx";
import Pagecontato from "./componentes/Pagecontato.jsx";
import Footer from "./componentes/Footer.jsx";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Pageinicio />
      <Pagevantagens />
      <Pagecardapio />
      <Pagesobre />
      <Pagelocalizacao />
      <Pagecontato />
      <Footer />

      <div></div>
    </div>
  );
}

export default App;
