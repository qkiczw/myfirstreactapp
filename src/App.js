import React, { Component } from 'react';
import './App.css';
import {MyFooter} from "./Footer";
import {MyHeader} from "./Header"
import {MainSection} from "./main"

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyHeader />
            <MainSection/>
          <MyFooter name="Łukasz" lastname="Sztormowski"/>
      </div>
    );
  }
}

export default App;
