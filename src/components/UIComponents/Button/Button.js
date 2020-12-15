import React from 'react';
import { classnames } from '../../utilities/globalUtils';
import './Button.scss';

export class Button extends React.Component {
  handleClick = (e) => {
    const { onClick } = this.props;
    if (onClick) onClick(e);
  };

  render() {
    const { button, buttonClass } = this.props;
    return (
      <button
        className={classnames('button__component', buttonClass)}
        onClick={this.handleClick}
      >
        {button}
      </button>
    );
  }
}

export default Button;
