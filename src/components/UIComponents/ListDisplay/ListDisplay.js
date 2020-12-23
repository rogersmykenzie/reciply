import React from 'react';
import { classnames } from '../../utilities/globalUtils'
import './ListDisplay.scss';

export class ListDisplay extends React.Component {
  formatDate = (date) => new Date(date).toString().split(' ').slice(0, 4).join(' ')

  render() {
    const {
      containerClass,
      titleClass,
      dateClass,
      buttonClass,
      list: {
        title,
        date,
      }
    } = this.props;
    return (
      <div className={classnames('list_display__container', containerClass)}>
        <h1 className={classnames('list_display__title', titleClass)}>
          {title}
        </h1>
        <h3 className={classnames('list_display__date', dateClass)}>
          {this.formatDate(date)}
        </h3>
        <button className={classnames('list_display__button', buttonClass)}>See More</button>
        {this.props.children}
      </div>
    );
  }
}

export default ListDisplay;