import "../CSS/pagecardapio.css";

function Pagecardapio() {
  return (
    <div className="card-1">
      <div className="page-cardapio-style" id="cardapio">
        <h2>Nosso Cardápio:</h2>
        <hr />
        <br />
        <br />

        <div className="section-cardapio-container">
          <div className="cardapio-item1">
            <img
              src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2014/05/22/1aiarroz-feijaoshutter.jpg"
              alt=""
              className="cardapio-img"
            />
            <h3>Prato do Dia</h3>
            <p className="cardapio-item p">
              Arroz, feijão, salada e carne grelhada.
            </p>
          </div>
          <div className="cardapio-item1">
            <img
              src="https://www.pingodoce.pt/wp-content/uploads/2018/09/legumes-assados-queijo-feta.jpg"
              alt=""
              className="cardapio-img"
            />
            <h3>Opção Vegetariana</h3>
            <p className="cardapio-item p">Quinoa, legumes assados e tofu.</p>
          </div>
        </div>
      </div>
      <br />
      <div></div>
      <div className="section-cardapio-container">
        <div className="cardapio-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW83yLElc1G9YHMLIB4KkIB4QHaAm96-bVQ&s"
            alt=""
            className="cardapio-img"
          />
          <h3>Sopa do Dia</h3>
          <p className="cardapio-item p">Creme de abóbora com gengibre.</p>
        </div>
        <div className="cardapio-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZnnjZOebVp94GZkc2t2RZGzDKjUL_d9ERg&s"
            alt=""
            className="cardapio-img"
          />
          <h3>Sobremesa Saudável</h3>
          <p className="cardapio-item p">
            Salada de frutas frescas da estação.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagecardapio;
