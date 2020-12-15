import React from 'react';
import Nav from '../Nav/Nav';
import groceries from 'assets/images/groceries.jpg';
import { Link } from 'react-router-dom';
import '../../reset.scss';
import './LandingPage.scss';

export class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="landing_page__container">
          <img
            className="landing_page__groceries"
            src={groceries}
            alt="groceries"
          />
          <div className="landing_page__container--content">
            <h1 className="landing_page__heading">Welcome to Reciply</h1>
            <h3 className="landing_page__heading--sub">
              Save time by letting us create grocery lists for you
            </h3>
            <Link to="/auth">
              <button className="landing_page__button">
                Click Here to Get Started
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
