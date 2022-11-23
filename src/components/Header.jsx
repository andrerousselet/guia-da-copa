import '../styles/header.css';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <div className='main-header'>
        <h1 className='header-title'>Guia da Copa do Mundo 2022</h1>
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
