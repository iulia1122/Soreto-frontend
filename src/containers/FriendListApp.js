import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { delFriend, starFriend, renderFriends, postFriend, postStarred } from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.postFriend,
      deleteFriend: this.props.delFriend,
      starFriend: this.props.postStarred,
      renderFriends: this.props.renderFriends
    };


    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} friends={friendsById} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps,  {
  postFriend,
  postStarred,
  delFriend,
  starFriend,
  renderFriends,
})(FriendListApp)
