import { useState, useMemo } from 'react';
import { usePokemonData } from '../hooks/usePokemonData';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import TypeFilter from '../components/TypeFilter';

export default function Home() {
  const { pokemonList, types, loading } = usePokemonData();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  const filtered = useMemo(() => {
    return pokemonList.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (type === '' || p.types.includes(type))
    );
  }, [pokemonList, search, type]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading Pokémon...</p>;
  if (filtered.length === 0) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No Pokémon found.</p>;

  return (
    <>
      {/* Centered Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '250px',
            textAlign: 'center'
          }}
        />
        <TypeFilter types={types} selected={type} onChange={setType} />
      </div>

      {/* Pokémon Cards */}
      <div className="grid">
        {displayed.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      {/* Centered Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
