import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="header">
      <Link id="logo" to="/">
        <ShoppingCart size={24} weight="fill" />
        <span>Frameworks 2</span>
      </Link>

      <nav className="menu">
        <Link to="/produto" className="links">
          Produto
        </Link>
        <Link to="/contato" className="links">
          Contato
        </Link>
        <Link to="/sobre" className="links">
          Sobre Nós
        </Link>
      </nav>
    </header>
  );
}
