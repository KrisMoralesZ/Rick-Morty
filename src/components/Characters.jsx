import React, { useEffect, useState } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(Response => Response.json())
        .then(data => setCharacters(data.results));
    }, []);
    return (
        <div className="characters">
            {characters.map(character =>(
                <h2>{character.name}</h2>
            ))
            }
        </div>
    );
}

export default Characters;  
