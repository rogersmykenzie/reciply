import React from 'react';
import Input from '../UIComponents/Input/Input';
import Nav from '../Nav/Nav';
import './CreateList.scss';

export class CreateList extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="create_list__container">
          <h1 className="create_list__title">Create a List</h1>
          <Input label="Title" />
        </div>
      </>
    );
  }
}

export default CreateList;