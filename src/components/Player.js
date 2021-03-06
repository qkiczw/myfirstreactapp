import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/playersList';
import {RaisedButton} from 'material-ui';



export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = items[playerToDisplay];

    return player?
        <React.Fragment>
            <h2>{player.id} - {player.name} </h2>
            <p><strong>Level gracza:</strong> {player.level}</p>
            <p><strong>Krótkie info o graczu:</strong> <br />
                {player.info}</p>
            <Link to='/'><RaisedButton label="Wróć"/></Link>
        </React.Fragment>
        :
        <p>Brak gracza</p>
}
