import "./CSS/header.css";

function Header() {
  return (
    <div class="header-container">
      <div class="logo">
        🥗 <span>Restaurante Popular Saudável</span>
      </div>
      <br />

      <nav class="menu">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#vantagens">Vantagens</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#localizacao">Localização</a>
        <a href="#contato">Contato</a>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Header;
