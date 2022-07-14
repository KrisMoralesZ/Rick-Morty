import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import Characters from './Characters';

const Cards = () => {
    return(
        <div className="container">
            <div className="row">
                <Characters/>
            </div>
        </div>
    )
}
export default Cards;