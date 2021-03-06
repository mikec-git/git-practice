import React, { Component } from 'react';
import List from './components/List/List';
import Title from './components/Title/Title';
import logo from './logo.svg';

import c from './App.module.scss';

class App extends Component {
  state = {
    list: [
      'Wake up',
      'Make breakfast',
      'Shower',
      'Get dressed',
      'Leave for interview',
      'Pass interview!',
      'Go back home!'
    ]
  }

  listItemClickedHandler = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1);

    this.setState({ list: newList });
  }

  render() {
    return (
      <div className={c.App}>
        <div className={c.App__Wrapper}>
          <img src={logo} className={c.App__Logo} alt="logo" />
          <Title text='To-Do List' />
          <List list={this.state.list} itemClick={this.listItemClickedHandler} />
        </div>
      </div>
    );
  }
}

export default App;
