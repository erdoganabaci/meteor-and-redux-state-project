import React from 'react';
import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
} from 'redux';
import {
  createLogger
} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// Exported from redux-little-router
import {
  routerForBrowser
} from 'redux-little-router';

// Exported from redux-devtools
import {
  createDevTools
} from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import numberoneReducer from '../../../imports/redux/reducers/numberoneReducer';
import numbertwoReducer from '../../../imports/redux/reducers/numbertwoReducer';
import operationReducer from '../../../imports/redux/reducers/operationReducer';
// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <
  DockMonitor toggleVisibilityKey = 'ctrl-h'
  changePositionKey = 'ctrl-q'
  defaultIsVisible = {
    true
  } >
  <
  LogMonitor theme = 'tomorrow' / >
  <
  /DockMonitor>
);

// Define your routes in a route-to-anything hash like below.
// The value of the route key can be any serializable data.
// This data gets attached to the `router` key of the state
// tree when its corresponding route is matched and dispatched.
// Useful for page titles and other route-specific data.

// Uses https://github.com/snd/url-pattern for URL matching
// and parameter extraction.
const routes = {
  '/': {},
};

// Install the router into the store for a browser-only environment.
// routerForBrowser is a factory method that returns a store
// enhancer and a middleware.
const {
  reducer,
  enhancer,
  middleware,
} = routerForBrowser({
  routes,
  // The basename for all routes. Optional.
  // basename: '/octahedron'
});

// Define actions

const initialState = {
    numberone: 0,
    numbertwo: 0,
    operation: (x,y) => x+y 
};

const rootReducer = function(state = initialState, action = {}) {
  return {
    numberone: numberoneReducer(state.numberone, action),
    numbertwo: numbertwoReducer(state.numbertwo, action),
    operation: operationReducer(state.operation, action)
  };
};

// Create store

const logger = createLogger();

const enhancers = [
  enhancer,
  applyMiddleware(middleware, ReduxThunk, logger),
  window.devToolsExtension ?
  window.devToolsExtension() : f => f
];


const Store = createStore(
  combineReducers({
    router: reducer,
    rootReducer
  }),
  window.__INITIAL_STATE || {},
  compose(...enhancers)
);

export default Store;
