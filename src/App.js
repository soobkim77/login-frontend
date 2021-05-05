import LogIn from './components/LogIn'
import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {

  }

  render() {
    return (
      <div className="App">
        <h1>Log-In App</h1>
        <LogIn />
      </div>
  );
  }
}

export default App;
