import React from 'react';
import ReactDOM from 'react-dom';


export class MyFooter extends React.Component {
    render() {
        return (
            <div className="Footer">
                <h2>Footer aplikacji</h2>
                <p>Stworzona przez {this.props.name} {this.props.lastname}</p>
            </div>

        )
    }
}

