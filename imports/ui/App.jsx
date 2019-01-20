import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { push,routerForBrowser, initializeCurrentLocation,initialState, Fragment, RoutedfdfdsfsdfProvider, Link } from 'redux-little-router';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import Store from '../../imports/redux/store/store.js';
import Hello from './Hello.jsx';

export default class App extends Component {


  render() {
    console.log(Store)

    return (
      <Provider store={Store}>
        <div>
          <h1>Welcome to Meteor!</h1>
          <Hello/>
        </div>
      </Provider>
    );
  }
}
