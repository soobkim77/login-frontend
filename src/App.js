import LogIn from './components/LogIn'
import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
      username: "",
      password: ""
  }


  handleCreateUser = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer `,
      'Content-Type':'application/json'
    },
    body: JSON.stringify({ user: {...this.state} })
    }).then(r => r.json())
    .then(data => console.log(data))
  }

   handleUserChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Log-In App</h1>
        <LogIn handleUser={this.handleUserChange} handlePassword={this.handlePasswordChange} handleCreate={this.handleCreateUser}/>
      </div>
  );
  }
}

export default App;
