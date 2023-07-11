import React from 'react';
import {Link} from "react-router-dom";

const DefaultTemplate = ({children}) => {
    return (
        <>
            <header>
                <ul>
                    <Link to="/">Météo</Link>
                    <Link to="/pokemon/">Pokedex</Link>
                </ul>

            </header>
            {children}
        </>
    );
}

export default DefaultTemplate