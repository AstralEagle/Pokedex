import React, { useEffect, useState } from 'react';
import PokeIndex from '../composants/Pokemon/PokeIndex';
import PokeData from '../data/pokemons.json';

const Index = () => {
  const [pokemons, setPokemons] = useState(PokeData);
  const [pokeSearch, setPokeSearch] = useState('');

  useEffect(() => {
    setPokemons(
      PokeData.filter(
        (x) =>
          x.name.fr.toLowerCase().includes(pokeSearch.toLowerCase()) ||
          x.pokedexId == pokeSearch,
      ),
    );
  }, [pokeSearch]);

  return (
    <div className="d-flex flex-col flex-1 overflow-hidden">
      <input
        style={{ margin: '5px 35px' }}
        placeholder={'Chercher un pokemon'}
        type="text"
        value={pokeSearch}
        onChange={(inp) => setPokeSearch(inp.target.value)}
      />
      <div className="d-flex flex-wrap justify-center flex-1 overflow-x-hidden overflow-y-scroll">
        {pokemons.map((x, i) => (
          <PokeIndex pokemon={x} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Index;
