import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Navigation/Navigation.js';

class App extends Component {

state = {
  navLog:[
    {name0: "#Home",},
    {name1: "#About Me"},
    {name2: "#Projects"},
    {name3: "#Contact"}
  ]
}


  render() {
    return (
      <div className="App">
      <Nav name={this.state.navLog} />
      </div>
    );
  }
}

export default App;
