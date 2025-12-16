import Header from "./componentes/header.jsx";
import Footer from "./componentes/Footer.jsx";
import Pageinicio from "./componentes/Pageinicio.jsx";
import Pagevantagens from "./componentes/Pagevantagens.jsx";
import Pagecardapio from "./componentes/Pagecardapio.jsx";
import Pagecontato from "./componentes/Pagecontato.jsx";
import Pagelocalizacao from "./componentes/Pagelocalizacao.jsx";
import Pagesobre from "./componentes/Pagesobre.jsx";
import Planos from "./componentes/Planos.jsx";



function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Pageinicio />
      <Pagesobre />
      <Pagevantagens />
      <Planos />
      <Pagecardapio />
      <Pagelocalizacao />
      <Pagecontato />
      <Footer />
    </div>
  );
}

export default App;
