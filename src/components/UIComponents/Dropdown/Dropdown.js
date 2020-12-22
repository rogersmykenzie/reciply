import React from 'react';
import { classnames } from '../../utilities/globalUtils'
import './Dropdown.scss';

export class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { containerClass, pointClass } = this.props;
    return (
      <>
        <div className={classnames('dropdown__container', containerClass)}>
          <div className={classnames('dropdown__container--point', pointClass)} />
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Dropdown;