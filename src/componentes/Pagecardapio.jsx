import "./CSS/Pagecardapio.css";

function Pagecardapio() {
  return (
    <section id="cardapio" class="cardapio">
      <h2>Nosso Cardápio da Semana:</h2>
      <hr />
      <br />

      <div class="cards">
        <div class="card">
          <img
            src="https://cdn.oceanserver.com.br/lojas/eat/uploads_produto/whatsapp-image-2023-04-18-at-121926jpeg-643ec5711c708.jpeg"
            alt=""
            className="img-cardapio"
          />
          <div class="card-body">
            <h3>Frango com Batata Doce</h3>
            <p>350 kcal | Sem Glúten</p>
            <span class="preco">R$ 24,90</span>
            <button>Adicionar</button>
          </div>
        </div>

        <div class="card">
          <img
            src="https://blog.mundoverde.com.br/wp-content/uploads/2021/03/bowl-vegano-2.jpeg"
            alt=""
            className="img-cardapio"
          />
          <div class="card-body">
            <h3>Bowl com Legumes Grelhados</h3>
            <p>420 kcal | Sem Glúten</p>
            <span class="preco">R$ 32,90</span>
            <button>Adicionar</button>
          </div>
        </div>

        <div class="card">
          <img
            src="https://i0.wp.com/espetinhodesucesso.com/wp-content/uploads/2025/02/Pure-de-mandioquinha-combina-com-qual-carne.jpg?resize=800%2C450&ssl=1"
            alt=""
            className="img-cardapio"
          />
          <div class="card-body">
            <h3>Frango Orgânico com Purê de Mandioquinha</h3>
            <p>480 kcal | Sem Glúten</p>
            <span class="preco">R$ 38,90</span>
            <button>Adicionar</button>
          </div>
        </div>

        <div class="card">
          <img
            src="https://uploads.metroimg.com/wp-content/uploads/2021/03/16161310/peixe-com-batata.jpg"
            alt=""
            className="img-cardapio"
          />
          <div class="card-body">
            <h3>Peixe Assado com Ervas e Arroz Integral</h3>
            <p>450 kcal | Sem Glúten</p>
            <span class="preco">R$ 42,90</span>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pagecardapio;
