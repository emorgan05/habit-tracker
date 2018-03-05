import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: '',
        password: ''
      }
    };
  }
  render () {
    return (
      <div>
        <form>
          <label>Email: </label>
          <input type="text" name="email" /></br>

          <label>Password: </label>
          <input type="password" name="password" /></br>
          
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LoginPage
