import "../CSS/pageinicio.css";

function Pageinicio() {
  return (
    <div id="inicio" className="page-inicio-style">
      <h1 className="page-inicio-title">
        Comida de Verdade, pronta para você.
      </h1>
      <p className="page-inicio-description">
        Alimentação saudável e acessível para todos os dias.
      </p>
      <button className="page-button">
        <a href="#planos">Ver Planos</a>
      </button>
    </div>
  );
}

export default Pageinicio;
