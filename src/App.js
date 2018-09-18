import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar'
import Body from './components/body/body'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    )
  }
}

export default App;
