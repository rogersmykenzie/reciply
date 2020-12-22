import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import profileSVG from 'assets/icons/user-icon.svg';
import Dropdown from '../UIComponents/Dropdown/Dropdown';
import MenuItem from '../UIComponents/MenuItem/MenuItem';
import './Nav.scss';

export const Nav = ({ history: { push } }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const createOption = (text, cb) => ({ text, cb });

  const signOut = () => {
    axios
      .get('/api/logout')
      .then(() => push('/'))
      .catch(error => error);
  }

  const DROPDOWN_OPTIONS = [
    createOption('Home', () => push('/')),
    createOption('Overview', () => push('/overview')),
    createOption('Sign Out', signOut)
  ];

  return (
    <nav className="nav__container">
      <span className="nav__tagline">
        Turn your online recipes into grocery lists quickly and painlessly!
      </span>
      <img
        className="nav__profile-icon"
        src={profileSVG}
        alt="profile_icon"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {showDropdown && (
        <Dropdown>
          {DROPDOWN_OPTIONS.map(
            ({ text, cb }) => (
              <MenuItem
                text={text}
                onClick={cb}
              />
            )
          )}
        </Dropdown>   
      )}
    </nav>
  );
};

export default withRouter(Nav);
