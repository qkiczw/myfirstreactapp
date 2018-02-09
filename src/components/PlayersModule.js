import React from 'react';
import { Link } from 'react-router-dom';
import players from "../data/playersList";
import {
    Table,
    TableHeader,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'

export default () => {
    const playersTable = Object.keys(players);
    return <React.Fragment>
        <Table>
            <TableHeader>
            <TableRow>
                <TableRowColumn><strong>ID</strong></TableRowColumn>
                <TableRowColumn><strong>Imię</strong></TableRowColumn>
                <TableRowColumn><strong>Level</strong></TableRowColumn>
            </TableRow>
            </TableHeader>
            <TableBody>
            {playersTable.map( player =>
                <TableRow key={player}>
                    <TableRowColumn>{players[player].id}</TableRowColumn>
                    <TableRowColumn><Link to={`/player/${player}`}>{players[player].name}</Link></TableRowColumn>
                    <TableRowColumn>{players[player].level}</TableRowColumn>
                </TableRow>
            )}
            </TableBody>
        </Table>
    </React.Fragment>
}