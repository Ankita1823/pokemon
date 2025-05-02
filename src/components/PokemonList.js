import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokémon</div>;

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
