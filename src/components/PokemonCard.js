import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function PokemonCard({ pokemon }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.includes(pokemon.id);

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Types: {pokemon.types.join(', ')}</p>
      <p>ID: {pokemon.id}</p>
      <button onClick={() => toggleFavorite(pokemon.id)}>
        {isFav ? '★' : '☆'}
      </button>
     
       <button onClick={() => window.location.href = `/pokemon/${pokemon.id}`} className="your-class-name" id="your-id">
  Details
</button>

    </div>
  );
}
