// ✅ Corrected code: src/hooks/usePokemonData.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);

        // Fetch first 150 Pokémon
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const results = response.data.results;

        // Fetch details for each Pokémon
        const detailedPokemonPromises = results.map(pokemon => axios.get(pokemon.url));
        const detailedPokemon = await Promise.all(detailedPokemonPromises);

        const finalData = detailedPokemon.map(res => {
          const data = res.data;
          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map(type => type.type.name),
          };
        });

        setPokemonList(finalData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const typeNames = response.data.results.map(type => type.name);
        setTypes(typeNames);
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchPokemonData();
    fetchTypes();
  }, []);

  return { pokemonList, types, loading };
};
