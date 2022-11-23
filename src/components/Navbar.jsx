import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {

  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-options">
          <Link to="/">Monte seu guia</Link>
        </li>
        <li className="nav-options">
          <Link to="/ratings">Avaliação de seleções</Link>
        </li>
        <li className="nav-options">
          <Link to="/criteria">Critérios de avaliação</Link>
        </li>
      </ul>
    </nav>
  )
};
