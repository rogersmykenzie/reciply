import React from 'react';
import { classnames } from '../../utilities/globalUtils';
import { v4 as uuid } from 'uuid';
import './Input.scss';

export class Input extends React.Component {
  constructor() {
    super();
    this.key = uuid();
    this.state = {
      animationClass: 'input__field--label',
      borderClass: 'input__field',
      hasValue: false,
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    this.setState({ hasValue: !!e.target.value.length });
    if (onChange) onChange(e);
  };

  handleFocus = () => this.setState({
    animationClass: 'input__field--slide',
    borderClass: 'input__field--border'
  });

  handleBlur = () => !this.state.hasValue && this.setState({
    animationClass: 'input__field--return',
    borderClass: 'input__field--border-return'
  });

  render() {
    const {
      placeholder = '',
      className = '',
      label = '',
      labelClass = '',
      type = '',
    } = this.props;

    const { animationClass, borderClass } = this.state;

    return (
      <div className="input__field--container">
        {label && (
          <label
            htmlFor={`input__field--${this.key}`}
            className={classnames(animationClass, labelClass)}
          >
            {label}
          </label>
        )}
        <input
          id={`input__field--${this.key}`}
          placeholder={placeholder}
          className={classnames(borderClass, className)}
          type={type || 'text'}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default Input;
