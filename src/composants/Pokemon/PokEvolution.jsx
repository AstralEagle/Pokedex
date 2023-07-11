import React from 'react';
import PokEvolutionInfo from './PokEvolutionInfo';

const PokEvolution = ({pokemon}) => {
    if (!pokemon.evolution)
        return (
            <div className="d-flex flex-col align-center">
                <h4>Pas d'évolution</h4>
            </div>
        )
    return (
        <div className="d-flex flex-col align-center">
            <h4>Évolution du pokemon</h4>

            <div className="d-flex justify-center align-center flex-1">
                {pokemon.evolution.pre &&
                    pokemon.evolution.pre.map((x, i) => (
                        <PokEvolutionInfo pokemon={x} key={i}/>
                    ))}
                <div className="d-flex flex-col">
                    <img style={{width: 75}} src={pokemon.sprites.regular} alt=""/>
                <span className="mr-2 ml-2">{pokemon.name.fr}</span>
                </div>
                {pokemon.evolution.next &&
                    pokemon.evolution.next.map((x, i) => (
                        <PokEvolutionInfo next={true} pokemon={x} key={i}/>
                    ))}
            </div>
        </div>
    );
};

export default PokEvolution;
