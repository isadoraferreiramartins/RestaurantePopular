import "./CSS/Pagelocalizacao.css";

function Pagelocalizacao() {
  return (
    <div>
      <div className="page-localizacao-style" id="localizacao">
        <h2>Nossa Localização:</h2>
        <hr />

        <p>
          Estamos localizados no coração da cidade, facilitando o acesso para
          todos os nossos clientes. Venha nos visitar e desfrutar de uma
          refeição saudável e deliciosa!
          <br />
          <br />
          Endereço: Praça João Pinheiro, 39 - Muriaé, MG, 36880-000
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1144.8054538742906!2d-42.36430102427307!3d-21.131443544724124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc65b69d7fd05%3A0x68726f2e5df44be9!2sPra%C3%A7a%20Jo%C3%A3o%20Pinheiro%2C%2039-13%20-%20Muria%C3%A9%2C%20MG%2C%2036880-000!5e1!3m2!1spt-BR!2sbr!4v1765829158976!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Pagelocalizacao;
