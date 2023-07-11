import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import PokeData from '../../data/pokemons.json'
import {FaChevronRight} from "react-icons/fa";

const PokEvolutionInfo = ({pokemon, next = false}) => {

    const [pokeInfo, setPokeInfo] = useState(null)

    useEffect(() => {
        setPokeInfo(PokeData.find(x => x.pokedexId == pokemon.pokedexId))
    }, [pokemon])

    if (!pokeInfo) return (<></>)

    return (<div className="d-flex align-center">
        {next && <FaChevronRight style={{fontSize: 45}}/>}
        <Link to={`/pokemon/${pokemon.pokedexId}`} className="mr-2 ml-2">
            <div className="d-flex flex-col">
                <img style={{width: 75}} src={pokeInfo.sprites.regular} alt=""/>
                <span>{pokemon.name}</span>
            </div>
        </Link>
        {!next && <FaChevronRight style={{fontSize: 45}}/>}
    </div>);
};

export default PokEvolutionInfo;
