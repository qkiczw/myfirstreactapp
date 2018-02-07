import React from 'react';
import ReactDOM from 'react-dom';

export class MyHeader extends React.Component{
    render() {
        const name = 'Łukasz'
        return (
            <div className="Header">
                <h1>To będzie moja pierwsza Appka</h1>
                <h2>Mam na imię {name} i uczę się ReactJS</h2>
            </div>
        )
    }


}