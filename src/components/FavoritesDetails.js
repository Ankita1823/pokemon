import React from 'react';
import { Link } from 'react-router-dom';
import './FavoritesDetails.css';

function FavoritesDetails({ pokemon }) {
  return (
    <div className="favorite-card">
      <img src={pokemon.image} alt={pokemon.name} className="favorite-img" />
      <h4>{pokemon.name}</h4>
      <Link to={`/pokemon/${pokemon.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default FavoritesDetails;
