import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
  ]
};


export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            id: action.id
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item) => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item) => {
        return item.id === action.id
      });
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.INIT_FRIENDS:
      return {
        ...state,
        friendsById: action.data.map((friend) => {
          return {
            name: friend.name,
            starred: friend.starred,
            id: friend.id
          }
        })
      };

    default:
      return state;
  }
}
