import React from 'react';
import "../styles/pokeIndex.css"
import {Link} from "react-router-dom";

const PokeIndex = ({pokemon, openPokemon}) => {

    return (
        <Link to={`/${pokemon.pokedexId}`} className={"d-flex align-center pokeIndex"} >
            <div>
                <h4 style={{margin: "5px 0"}}>#{pokemon.pokedexId} {pokemon.name.fr}</h4>
                <div className="d-flex justify-center">{pokemon.types.map((x, i) => (
                    <img key={i} src={x.image} alt={x.name} style={{height: 20}} className="icontype"/>
                ))}</div>
            </div>
            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} style={{height: 75}}/>
        </Link>
    )
}


export default PokeIndex