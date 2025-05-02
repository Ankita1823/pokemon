import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { usePokemonData } from '../hooks/usePokemonData';
import PokemonCard from '../components/PokemonCard';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const { pokemonList, loading } = usePokemonData();

  const favPokemon = pokemonList.filter((p) => favorites.includes(p.id));

  if (loading) return <p>Loading...</p>;
  if (favPokemon.length === 0) return <p>No favorites yet!</p>;

  return (
    <div className="grid">
      {favPokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
