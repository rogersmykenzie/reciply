import React from 'react';
import profileSVG from 'assets/icons/user-icon.svg';
import './Nav.scss';

export const Nav = (props) => {
  return (
    <nav className="nav__container">
      <span className="nav__tagline">
        Turn your online recipes into grocery lists quickly and painlessly!
      </span>
      <img className="nav__profile-icon" src={profileSVG} alt="profile_icon" />
    </nav>
  );
};

export default Nav;
