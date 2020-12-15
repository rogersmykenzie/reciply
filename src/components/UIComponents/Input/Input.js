import React from 'react';
import { classnames } from '../../utilities/globalUtils';
import { v4 as uuid } from 'uuid';
import './Input.scss';

export class Input extends React.Component {
  constructor() {
    super();
    this.key = uuid();
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    if (onChange) onChange(e);
  };

  render() {
    const {
      placeholder = '',
      className = '',
      label = '',
      labelClass = '',
      type = '',
    } = this.props;

    return (
      <div className="input__field--container">
        {label && (
          <label
            for={`input__field--${this.key}`}
            className={classnames('input__field--label', labelClass)}
          >
            {label}
          </label>
        )}
        <input
          id={`input__field--${this.key}`}
          placeholder={placeholder}
          className={classnames('input__field', className)}
          type={type ? type : 'text'}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
