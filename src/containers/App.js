import React, { Component } from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
