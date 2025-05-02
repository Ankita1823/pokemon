import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Pokémon Detail Page - ID: {id}</h2>
      {/* Add actual Pokémon detail logic here */}
    </div>
  );
}

export default PokemonDetailPage;
