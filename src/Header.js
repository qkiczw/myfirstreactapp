import React from 'react';
import ReactDOM from 'react-dom';

export class MyHeader extends React.Component{
    render() {
        const name = 'Łukasza';
        return (
            <div className="Header">
                <h1>Pierwsza aplikacja {name}</h1>
            </div>
        )
    }


}