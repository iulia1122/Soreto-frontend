import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  componentDidMount () {
    this.props.actions.renderFriends();
  }

  render () {
    let friendList = null;
    if(this.props.friends && this.props.friends.length >= 1) {
      friendList =  this.props.friends.map((friend, index) => {
        return (
          <FriendListItem
            key={index}
            id={friend.id}
            name={friend.name}
            starred={friend.starred}
            {...this.props.actions} />      
        );
      })
    }
    return (
      <ul className={styles.friendList}>
        {friendList}
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
