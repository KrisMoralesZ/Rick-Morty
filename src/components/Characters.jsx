import React, { useEffect, useState, useReducer } from 'react'
import { Card } from 'react-bootstrap';
const initialState = {
  favorites: []
}
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(Response => Response.json())
      .then(data => setCharacters(data.results));
  }, []);
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  return (
    <div className="characters">
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      {characters.map(character => (
        <div className="item" key={character.id}>
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
}
export default Characters;  
