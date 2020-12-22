import React from 'react';
import './MenuItem.scss';

export class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { text, onClick } = this.props;
    return (
      <div className="menu_item__container" onClick={onClick}>
        <span className="menu_item__text">{text}</span>
      </div>
    );
  }
}

export default MenuItem;