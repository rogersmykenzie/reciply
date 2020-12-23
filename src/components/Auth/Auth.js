import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOCs/withAuthRedirect';
import Nav from '../Nav/Nav';
import Input from '../UIComponents/Input/Input';
import Button from '../UIComponents/Button/Button';
import { ASCII_MAP } from '../../constants';
import { toKebabCase } from '../utilities/globalUtils';
import { loginUser } from '../../redux/reducers/AuthReducer';
import './Auth.scss';

export class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'login',
      email: '',
      password: '',
      'confirm-password': '',
      error: '',
    };
  }

  handleError = ({ message }) => {
    const error = (function() {
      switch(message) {
        case 'passwords not equal': 
          return 'Passwords are not equal. Try again.'
        case 'password criteria not met': 
          return 'Password must include a special character, lowercase character, uppercase character, and be 8 characters or longer.'
        case 'email exists':
          return 'There is already an account attached to that email. Please use another.'
        case 'username or password incorrect':
          return 'The username or password is incorrect. Please try again.'
        case 'no email':
          return 'Please enter an email.'
        case 'no password':
          return 'Please enter a password.'
        default: 'Something went wrong. Please try again later.'
      }
    })();

    this.setState({ error });
  }

  handleChange = e => {
    this.setState({
      [toKebabCase(e.target.placeholder, ' ')]: e.target.value
    })
  }

  validatePassword = (pw) => {
    let hasSpecial = false, hasLower = false, hasUpper = false;
    for (let i = 0; i < pw.length; i++) {
      const currChar = pw.charCodeAt(i);
      ASCII_MAP.special.forEach(val => {
        if(currChar >= val[0] && currChar <= val[1]) {
          hasSpecial = true;
        }
      });
      if(currChar >= ASCII_MAP.lowercase[0][0] && currChar <= ASCII_MAP.lowercase[0][1]) {
        hasLower = true;
      }
      if(currChar >= ASCII_MAP.uppercase[0][0] && currChar <= ASCII_MAP.uppercase[0][1]) {
        hasUpper = true;
      }
    }

    return hasSpecial && hasLower && hasUpper && pw.length >= 8;
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { email, password, 'confirm-password': confirmPassword } = this.state;
    if(confirmPassword !== password) {
      this.handleError({
        message: 'passwords not equal'
      });
    } else if(!this.validatePassword(password)) {
      this.handleError({
        message: 'password criteria not met'
      })
    } else {
      axios
        .post('/api/register', {
          email,
          password
        })
        .then(({ data: { email, _id } }) => {
          window.sessionStorage.setItem('userData', JSON.stringify({ email, _id }));
          this.props.history.push('/overview')
        })
        .catch((e) => this.handleError(e.response.data))
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { password, email} = this.state;
    const { loginUser, history } = this.props;
    if (!email) return this.handleError({ message: 'no email' });
    if (!password) return this.handleError({ message: 'no password' });
    loginUser(
      password,
      email,
      (_id) => {
        window.sessionStorage.setItem('userData', JSON.stringify({ email, _id }));
        history.push('/overview');
      },
      (e) => this.handleError(e.response.data)
    );
  }
  

  setView = (view) => {
    this.setState({ view, email: '', password: '', 'confirm-password': ''});
  }

  handleSubmit = e => e.preventDefault();

  render() {
    const { error, view } = this.state;
    const errorMessage = error ? <span className="auth__error">{error}</span> : undefined;
    if (view === 'register') {
      return (
        <>
          <Nav />
          <form className="auth--container" onSubmit={this.handleSubmit}>
            <Input
              placeholder="Email"
              className="auth__email--input"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Password"
              className="auth__email--input"
              type="password"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Confirm Password"
              className="auth__email--input"
              type="password"
              onChange={this.handleChange}
            />
            {errorMessage}
            <Button
              button="Register"
              buttonClass="auth__email--input"
              onClick={this.handleRegister}
            />
            <p>
              Already have an account?{' '}
              <span
                className="auth__register--login"
                onClick={() => this.setView('login')}
              >
                Login
              </span>{' '}
              now.
            </p>.
          </form>
        </>
      );
    } else {
      return (
        <>
          <Nav />
          <form className="auth--container">
            <Input
              placeholder="Email"
              className="auth__email--input"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Password"
              className="auth__email--input"
              type="password"
              onChange={this.handleChange}
            />
            {errorMessage}
            <Button
              button="Login"
              buttonClass="auth__email--input"
              onClick={this.handleLogin}
            />
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
          </form>
        </>
      );
    }
  }
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(
  undefined,
  mapDispatchToProps
)(
  withAuthRedirect(
    Auth,
    '/auth',
    '/overview'
  )
);
