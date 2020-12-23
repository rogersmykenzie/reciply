import React from 'react';
import { connect } from 'react-redux';
import ListDisplay from '../UIComponents/ListDisplay/ListDisplay';
// import ListItem from '../UIComponents/ListItem/ListItem';
import Nav from '../Nav/Nav';
import { getLists } from '../../redux/reducers/ListReducer';
import './Overview.scss';

export class Overview extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { _id } = JSON.parse(window.sessionStorage.getItem('userData'));
    this.props.getLists(_id);
  }

  getListDisplay = (list) => <ListDisplay key={list._id} list={list} />

  render() {
    const { lists } = this.props;

    const titleText = lists.length ? 'Your Lists:' : 'You currently have no lists. Try making one now!';

    return (
      <>
        <Nav />
        <div className="overview__container">
          <h1 className="overview__list--title">{titleText}</h1>
          {lists.map(this.getListDisplay)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.list.lists
  }
}

const mapDispatchToProps = {
  getLists
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);