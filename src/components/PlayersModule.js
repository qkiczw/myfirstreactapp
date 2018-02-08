import React from 'react';
import { Link } from 'react-router-dom';
import players from "../data/playersList";


export default () => {
    const playersTable = Object.keys(players);
    return <React.Fragment>
        <table>
            <thead>
            <tr>
                <td>{this.name}</td>
            </tr>
            <tr>
                <td><strong>ID</strong></td>
                <td><strong>Imię</strong></td>
                <td><strong>Level</strong></td>
            </tr>
            </thead>
            <tbody>
            {playersTable.map( player =>
                <tr key={player}>
                    <td>{players[player].id}</td>
                    <td><Link to={`/player/${player}`}>{players[player].name}</Link></td>
                    <td>{players[player].level}</td>
                </tr>
            )}
            </tbody>
        </table>
    </React.Fragment>
}