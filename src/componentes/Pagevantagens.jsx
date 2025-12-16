import "../CSS/pagevantagens.css";

function Pagevantagens() {
  return (
    <div className="page-vantagens-style" id="vantagens">
      <h2>Por que escolher o Restaurante Popular Saudável:</h2>

      <hr />
      <br />
      <br />
      <br />
      <div className="section-card-containerr">
        <div className="card-produto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX3SHK3177jE2BPGyb0tDuGnGCUlZCSUEng&s"
            alt=""
            className="card-image"
          />
          <h2 className="card-title"> Ingredientes Frescos</h2>
          <p className="card-p">
            {" "}
            Trabalhamos apenas com produtos locais e orgânicos.
          </p>
        </div>
        <div className="card-produto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8S2135-6EvdcA0mbsHuASaddX80yyAptpAg&s"
            alt=""
            className="card-image"
          />
          <h2 className="card-title"> Ingredientes Frescos</h2>
          <p className="card-p">
            {" "}
            Trabalhamos apenas com produtos locais e orgânicos.
          </p>
        </div>
        <div className="card-produto">
          <img
            src="https://thumbs.dreamstime.com/b/bloco-fresco-da-cenoura-isolado-junto-no-fundo-branco-72604163.jpg"
            alt=""
            className="card-image"
          />
          <h2 className="card-title"> Ingredientes Frescos</h2>
          <p className="card-p">
            {" "}
            Trabalhamos apenas com produtos locais e orgânicos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagevantagens;
