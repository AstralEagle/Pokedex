import React, {useEffect, useState} from "react";
import PokeIndex from "../composants/PokeIndex";
import PokeData from "../data/pokemons.json"

const Index = () => {

    const [pokemons, setPokemons] = useState(PokeData)


    return(
        <div className="d-flex flex-wrap justify-center align-center">
            {pokemons.map((x, i) => (
                <PokeIndex pokemon={x} key={i} openPokemon={(val) => console.log(val)}/>
            ))}
        </div>
    )
}

export default Index