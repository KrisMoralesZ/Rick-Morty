import React from 'react'
import { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () =>{
        setDarkMode(!darkMode);
    }
    return (
        <div className="header">
            <button type="button" onClick={handleClick}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}

export default Header