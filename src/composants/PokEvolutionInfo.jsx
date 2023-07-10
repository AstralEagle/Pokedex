import React from 'react';
import { Link } from 'react-router-dom';

const PokEvolutionInfo = ({ pokemon, next = false }) => {
  return (
    <div className="d-flex align-center">
      {next && <span style={{ fontSize: 45 }}> {'>'} </span>}
      <Link to={`/${pokemon.pokedexId}`} className="mr-2 ml-2">
        {pokemon.name}
      </Link>
      {!next && <span style={{ fontSize: 45 }}> {'>'} </span>}
    </div>
  );
};

export default PokEvolutionInfo;
