import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyFooter from './Footer';
import Main from './Main';
import Player from './Player';
import MyHeader from "./Header";

export default class extends React.Component {
    render() {
        return <BrowserRouter>
            <MuiThemeProvider>

            <React.Fragment>
                    <MyHeader name="Łukasza" />
                    <Route path="/" exact component={Main}/>
                    <Route path="/player/:id" component={Player}/>
                    <MyFooter/>

                </React.Fragment>
            </MuiThemeProvider>


        </BrowserRouter>
    }
}