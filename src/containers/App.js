import React, { Component } from 'react';

import Menu from './Menu'
import Eggs from '../components/Eggs'
import GameInfo from '../components/GameInfo'
import OutputList from '../components/OutputList'
import EndOfGameOverlay from '../components/EndOfGameOverlay'

class App extends Component {

  constructor() {
    super()

    this.state = {
      eggCount: 2,
      outputs: [{message: 'I am an output!'}, {message: 'I am an output!'}]
    }
  }

  listEggs() {
    switch (this.state.eggCount) {
      case 2:
        return [{broken: false},{broken: false}]
      case 1:
        return [{broken: true},{broken: false}]
      case 0:
        return [{broken: true},{broken: true}]
      default:
        console.error('Something went horribly wrong!')
        return []
    }
  }


  render() {

    return (
      <div>
        <EndOfGameOverlay message={'I will say if its over when I am ready!'} />
        <Menu />
        <GameInfo />
        <Eggs eggs={ this.listEggs() } />
        <OutputList outputs={this.state.outputs} />
      </div>
    );
  }
}

export default App;
