import "../CSS/pagecontato.css";

function Pagecontato() {
  return (
    <section id="contato" className="section-card-container">
      <br />
      <br />
      <br />
      <h2 className="section-title-center">Fale Conosco:</h2>
      <hr />

      <form className="contact-form">
        <input type="text" placeholder="Nome:" className="contact-input" />
        <input type="email" placeholder="Email:" className="contact-input" />
        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>
      <br />
      <br />
    </section>
  );
}

export default Pagecontato;
