import React from "react";
import "./NavBar.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navlogo">
            <a href="#home"><p>Event Planner</p></a>
        </div>
      <ul className="navlinks">
        <li className="navlink">
          <a href="#home">Home</a>
        </li>
        <li className="navlink">
          <a href="#description">Descrição</a>
        </li>
        <li className="navlink">
          <a href="#events_categories">Categorias</a>
        </li>
        <li className="navlink">
          <a href="#features">Recursos</a>
        </li>
        <li className="navlink">
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li className="navlink">
          <a href="#contact">Contato</a>
        </li>



      </ul>
    </nav>
  );
};

export default Navbar;
