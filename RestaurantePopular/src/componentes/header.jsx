import "../CSS/header.css";

function Header() {
  return (
    <header className="header-style">
      <div className="header-logo-container">
        <span className="logo-image">
          {" "}
          <img
            src="https://i.pinimg.com/736x/0e/2a/1a/0e2a1a2dd8bda3777a53f4ab6fcfb415.jpg"
            alt=""
            className="logo-prato"
          />
        </span>
        <span className="logo-text">Restaurante Popular Saudável</span>
      </div>

      <nav className="nav-menu">
        <a href="#inicio" className="nav-link">
          {" "}
          Inicio
        </a>
        <a href="#vantagens" className="nav-link">
          {" "}
          Vantagens
        </a>
        <a href="#cardapio" className="nav-link">
          {" "}
          Cardapio
        </a>
        <a href="#sobre" className="nav-link">
          {" "}
          Sobre
        </a>
        <a href="#localizacao" className="nav-link">
          {" "}
          Localização
        </a>
        <a href="#contato" className="nav-link">
          {" "}
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
