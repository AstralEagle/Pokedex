import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import PokeData from '../data/pokemons.json';

import '../styles/pokemon.css';
import PokeStats from '../composants/PokeStats';
import PokEvolution from '../composants/PokEvolution';
import PokeFaiblesse from '../composants/PokeFaiblesse';

const Pokemon = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [menuSelected, setMenuSelected] = useState(1);
    const [isShiny, setIsShiny] = useState(false);

    useEffect(() => {
        setPokemon(PokeData.find((x) => x.pokedexId == id));
    }, [id]);
    if (!pokemon) return <div className="d-flex flex-col align-center justify-center"><h1>
        Pokemon introuvable
    </h1>
        <Link to="/" style={{backgroundColor: "#7a7a7a", padding: 5, borderRadius: 5}}>Go Home</Link>

    </div>;
    return (<div
            className={'d-flex flex-col align-center justify-center'}
            style={{height: '100vh'}}
        >
            <Link to="/" className="btnBack">
                Go Back
            </Link>
            <div className={'pokemonInfo'}>
                <div className="d-flex justify-betewn">
                    <div>
                        <h1 className="mb-2">{pokemon.name.fr}</h1>
                        <p className="mt-1 mb-1">Nom Anglais: {pokemon.name.en}</p>
                        <p className="mt-1 mb-1">Nom Japonais: {pokemon.name.jp}</p>
                        <div className={'mt-4'}>
                            <p className="pokeDesc">
                                <span className="text-bold-6">Poids:</span> {pokemon.weight}
                            </p>
                            <p className="pokeDesc">
                                <span className="text-bold-6">Taille:</span> {pokemon.height}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-col">
                        <img
                            src={isShiny ? pokemon.sprites.shiny : pokemon.sprites.regular}
                            alt=""
                            className="pokeImage"
                            onClick={() => {
                                setIsShiny(!isShiny);
                            }}
                        />
                        <div className="d-flex justify-center">
                            {pokemon.types.map((x, i) => (<img
                                    key={i}
                                    src={x.image}
                                    alt={x.name}
                                    style={{height: 20}}
                                    className="icontype"
                                />))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
            <span
                className={`mr-2 ml-2 ${menuSelected === 1 && 'pokeSelect'}`}
                onClick={() => setMenuSelected(1)}
            >
              Stats
            </span>
                        <span
                            className={`mr-2 ml-2 ${menuSelected === 2 && 'pokeSelect'}`}
                            onClick={() => setMenuSelected(2)}
                        >
              Évolution
            </span>
                        <span
                            className={`mr-2 ml-2 ${menuSelected === 3 && 'pokeSelect'}`}
                            onClick={() => setMenuSelected(3)}
                        >
              Faiblesse
            </span>
                    </div>
                    <div
                        style={{backgroundColor: '#484848', height: 1, width: '100%'}}
                    />
                </div>
                <PokeRouter menuSelect={menuSelected} pokemon={pokemon}/>
            </div>
        </div>);
};

const PokeRouter = ({menuSelect, pokemon}) => {
    switch (menuSelect) {
        case 2:
            return <PokEvolution pokemon={pokemon}/>;
        case 3:
            return <PokeFaiblesse faiblesse={pokemon.resistances}/>;
        default:
            return <PokeStats stats={pokemon.stats}/>;
    }
};

export default Pokemon;
