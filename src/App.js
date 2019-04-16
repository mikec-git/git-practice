import React, { Component } from 'react';
import List from './components/list/list';
import logo from './logo.svg';

class App extends Component {
  state = {
    list: [
      'Wake up',
      'Make breakfast',
      'Shower',
      'Get dressed',
      'Leave for interview',
      'Pass interview!',
      'Go back home'
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img style={{width: '100px', height: '100px'}} src={logo} className="App-logo" alt="logo" />
          <List list={this.state.list} />
        </header>
      </div>
    );
  }
}

export default App;
