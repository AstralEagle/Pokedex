import React from 'react';

const PokeBar = ({ stat, max }) => {
  return (
    <div className="pokeBarInfoMax">
      <span>{stat}</span>
      <div
        style={{
          width: `${(stat * 100) / max}%`,
        }}
        className="pokeBarInfo"
      ></div>
    </div>
  );
};

export default PokeBar;
