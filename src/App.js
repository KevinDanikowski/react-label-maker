import React, {Component} from 'react';
import Login from './features/Login'
import Logout from './features/Logout'
import ShippingLabelMaker from './features/shipping-label-maker'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoggedIn: false,
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() { 
    return (
      <div className='App'>
        {this.state.isLoggedIn ? <Logout logout={this.handleLogout}/> : <Login login={this.handleLogin} />}
        {this.state.isLoggedIn && <ShippingLabelMaker />}
      </div>
    );
  }
}
