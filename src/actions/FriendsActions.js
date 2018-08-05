import * as types from '../constants/ActionTypes';
import axios from '../axios';

export function addFriend(name, id) {
  return {
    type: types.ADD_FRIEND,
    name,
    id
  };
}

export function deleteFriend(id, name) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function setFriends (data) {
  return {
      type: types.INIT_FRIENDS,
      data
  };
}

export function renderFriends ()  {
  return function(dispatch) {
    axios.get('/friends', )
      .then(response => {
        dispatch(setFriends(response.data.rows));
      })
      .catch(error => {
          console.log(error)
      } );
    }
}

export function postFriend (name, id) {
  return function(dispatch) {
    axios.post('/friends', {name: name, starred: false})
      .then(() => {
        dispatch(addFriend(name, id));
      })
      .catch(error => {
          console.log(error)
      } );
    }
}

export function postStarred (id, name, starred) {
  return function(dispatch) {
    axios.post('/friends/star', {
      id: id, 
      starred: starred})
      .then(() => {
        dispatch(starFriend(id));
      })
      .catch(error => {
          console.log(error)
      } );
    }
}

export function delFriend(id) {
  return function (dispatch) {
    axios.post('/friends/delete', { id: id })
      .then(() => {
        dispatch(deleteFriend(id));
      })
      .catch(error => {
        console.log(error)
      });
  }
}




