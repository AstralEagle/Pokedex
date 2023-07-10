import React from 'react';
import PokEvolutionInfo from "./PokEvolutionInfo";

const PokEvolution = ({pokemon}) => {


    return (
        <div className="d-flex flex-col align-center">
            <h4>Évolution du pokemon</h4>

            <div className="d-flex justify-center align-center flex-1">

                {pokemon.evolution.pre && pokemon.evolution.pre.map((x, i) => (
                    <PokEvolutionInfo pokemon={x} key={i}/>
                ))}
                <span className="mr-2 ml-2">
                {pokemon.name.fr}
            </span>
                {pokemon.evolution.next && pokemon.evolution.next.map((x, i) => (
                    <PokEvolutionInfo next={true} pokemon={x} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default PokEvolution