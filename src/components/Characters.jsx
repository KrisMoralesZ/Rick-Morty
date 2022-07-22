import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import useCharacters from '../hooks/useCharacter';
import Search from './Search';


const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

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
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = useCallback(() =>{
    setSearch(searchInput.current.value);
  },[])

  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }),
    [characters, search]
  )

  return (
    <div className="characters">
      {
        favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))
      }
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      {
        filteredUsers.map(character => (
          <div className="item" key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
            <button type="button" onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
          </div>
        ))
      }
    </div>
  );
}
export default Characters;  
