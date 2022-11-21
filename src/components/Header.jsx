import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <div className='main-header'>
        <div className='titles'>
          <h1>Guia da Copa do Mundo 2022</h1>
        </div>
        <img
          className="header-trophy"
          src="https://i.ibb.co/GMqX7DD/world-cup.png"
          alt="world-cup"
        />
      </div>
      <Navbar />
    </header>
  )
};
