import React, { Component } from 'react';

import DropForm from '../components/DropForm'
import FunctionForm from '../components/FunctionForm'
import SettingsForm from '../components/SettingsForm'

class Menu extends Component {
  render() {
    return (
      <div>
        I am a menu!
        <DropForm />
        <FunctionForm />
        <SettingsForm />
      </div>
    );
  }
}

export default Menu;
