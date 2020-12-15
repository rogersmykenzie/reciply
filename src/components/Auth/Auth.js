import React from 'react';
import Nav from '../Nav/Nav';
import Input from '../UIComponents/Input/Input';
import Button from '../UIComponents/Button/Button';
import './Auth.scss';

export class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'register',
    };
  }

  setView = (view) => {
    this.setState({ view });
  };

  render() {
    if (this.state.view === 'register') {
      return (
        <>
          <Nav />
          <div className="auth--container">
            <Input placeholder="Email" className="auth__email--input" />
            <Input
              placeholder="Password"
              className="auth__email--input"
              type="password"
            />
            <Input
              placeholder="Confirm Password"
              className="auth__email--input"
              type="password"
            />
            <Button button="Register" buttonClass="auth__email--input" />
            <p>
              Already have an account?{' '}
              <span
                className="auth__register--login"
                onClick={() => this.setView('login')}
              >
                Login
              </span>{' '}
              now.
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Nav />
          <div className="auth--container">
            <Input placeholder="Email" className="auth__email--input" />
            <Input
              placeholder="Password"
              className="auth__email--input"
              type="password"
            />
            <Button button="Login" buttonClass="auth__email--input" />
            <p>
              Don't have an account?{' '}
              <span
                className="auth__register--login"
                onClick={() => this.setView('register')}
              >
                Register
              </span>{' '}
              now.
            </p>
          </div>
        </>
      );
    }
  }
}

export default Auth;
