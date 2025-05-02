import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Pokémon Details for ID: {id}</h2>
      {/* Add detailed Pokémon view here */}
    </div>
  );
}

export default PokemonDetailPage;
