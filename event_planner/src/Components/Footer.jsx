import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="footer">
          <h2>Event Planner</h2>
          <p>
            Simplifique a organização dos seus eventos e transforme cada ocasião em um momento inesquecível.
          </p>

          <span> &copy; 2026 Event Planner. Todos os direitos reservados</span>

          <div className="links-row">
            <ul>
                <li><a href="#description">Descrição</a></li>
                <li><a href="#features">Recursos</a></li>
                <li><a href="#contact">Entre em contato</a></li>
            </ul>
          </div>

          <p>Feito para tornar o planejamento de eventos mais simples, organizado e eficiente.</p>
        </section>
      </div>

    </footer>
  );
};

export default Footer;
