import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App';

const Header = () => {
  const navigate = useNavigate(); // 

  return (
    <header>
      <div className="header-title">Pokémon Explorer</div>
      <div className="nav-buttons">
        <button className="button" onClick={() => navigate('/')}>Home</button>
        <button className="button" onClick={() => navigate('/favorites')}>Favorites</button>
      </div>
    </header>
  );
};

export default Header;
