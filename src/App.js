import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Registration</h2>
        <hr />
        <RegistrationForm />
        <hr />
        <br />
      </div>
    );
  }
}

export default App;
