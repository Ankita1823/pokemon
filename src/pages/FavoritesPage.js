import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import PokemonCard from '../components/PokemonCard';
import FavoritesDetails from '../components/FavoritesDetails';


function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorite Pokémon</h1>
      <div className="pokemon-list">
        {favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
