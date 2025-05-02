import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
    });
  }, [id]);

  if (!pokemon) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '20px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textTransform: 'capitalize', color: '#4f46e5' }}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.map((a) => a.ability.name).join(', ')}</p>
      <h3>Stats</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
