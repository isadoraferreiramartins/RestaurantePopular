import "../CSS/Planos.css";

function Planos() {
  return (
    <div id="planos">
      <h1>Planos:</h1>
      <hr />
      <section class="planos">
        <div class="card">
          <h3>Plano Básico</h3>
          <p class="preco">R$ 29,90</p>
          <ul>
            <li>✔ 5 refeições por semana</li>
            <li>✔ Produtos orgânicos</li>
            <li>✔ Sem glúten</li>
          </ul>
          <button>Escolher plano</button>
        </div>

        <div class="card destaque">
          <h3>Plano Premium</h3>
          <p class="preco">R$ 59,90</p>
          <ul>
            <li>✔ 10 refeições por semana</li>
            <li>✔ Produtos locais e orgânicos</li>
            <li>✔ Sem glúten e baixo em calorias</li>
          </ul>
          <button>Escolher plano</button>
        </div>

        <div class="card">
          <h3>Plano Família</h3>
          <p class="preco">R$ 89,90</p>
          <ul>
            <li>✔ 20 refeições por semana</li>
            <li>✔ Ideal para até 4 pessoas</li>
            <li>✔ Cardápio variado</li>
          </ul>
          <button>Escolher plano</button>
        </div>
      </section>
    </div>
  );
}

export default Planos;
