import React from 'react';

const PokeBar = ({stat, max}) => {
    return (
        <div style={{ backgroundColor: "#8f8f8f", height: 15, borderRadius: 5, overflow: "hidden"}}>
            <div style={{height: "100%", width: `${stat*100/max}%`, backgroundColor: "#2368fc"}}></div>
        </div>
    )
}

export default PokeBar