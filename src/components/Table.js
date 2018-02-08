import React from 'react';

import players from 'src/components/PlayersModule';

export default (props) => {
    const productToDisplay = props.match.params.id;
    // const product = items[productToDisplay];

    return (
        <React.Fragment>
            <h2>{players.name}</h2>
            <p>{players.info}</p>
        </React.Fragment>
    )