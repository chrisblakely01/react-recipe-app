import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeGrid from './RecipeGrid.js';
import axios from 'axios';

class App extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
  axios.get(`https://api.edamam.com/search?q=chicken,spinach,rice,&app_id=8d32208f&app_key=dcfbe45fbd9f0f58f533deabea8ac556&`)
    .then(res => {
      const recipes = res.data.hits;
      this.setState({ recipes });
      console.log(res.data.hits);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Recipe App by Chris Blakely</h1>
        </header>
        <RecipeGrid data={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
