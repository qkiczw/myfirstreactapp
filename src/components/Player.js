import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/playersList';

export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = items[playerToDisplay];

    return player?
        <React.Fragment>
            <h2>{player.id}</h2>
            <p>{player.name}</p>
            <p>{player.level}</p>
            <p>{player.info}</p>
            <Link to='/'><button >Wróć i zobacz innych</button></Link>
        </React.Fragment>
        :
        <p>Brak produktu</p>
}