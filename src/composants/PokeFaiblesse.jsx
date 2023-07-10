import React from 'react';

const PokeFaiblesse = ({ faiblesse }) => {
  return (
    <div className="d-flex justify-center align-center flex-col">
      <h4 className={'align-center'}>Faiblesse du pokemon</h4>
      <div className="d-flex flex-wrap flex-1 justify-center">
        {faiblesse.map((x, i) => (
          <div className="d-flex flex-col FaibleTab" key={i}>
            <span className="FaibleRow">{x.name}</span>
            <span className="FaibleRow">x{x.multiplier}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeFaiblesse;
