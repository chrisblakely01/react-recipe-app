import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeGrid from './RecipeGrid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Recipe App by Chris Blakely</h1>
        </header>
        <RecipeGrid name="Chris Blakely"/>
      </div>
    );
  }
}

export default App;
