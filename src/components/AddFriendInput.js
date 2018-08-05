import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  getId() {
    let sortedFriendList = this.props.friends.sort();
    let defaultId = 1;
    if (sortedFriendList.length > 0) {
      let highestId = sortedFriendList[this.props.friends.length - 1].id;
      return highestId + 1;
    }
    return defaultId;
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) 
    {
      let id = this.getId();
      this.props.addFriend(name, id);
      this.setState({ name: '', id: id });
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
