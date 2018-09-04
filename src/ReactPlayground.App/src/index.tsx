import * as React from "react";
import * as ReactDOM from "react-dom";

import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { routerForBrowser } from 'redux-little-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from "redux-devtools-extension";

import { routes } from "./routes";
import { App } from "./app";
import courses from "./reducers/courseReducer";
import authors from "./reducers/authorReducer";

import thunk from 'redux-thunk';
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

const store = createStore(
    combineReducers({ router: reducer, courses, authors }),
    {},
    composeWithDevTools(enhancer, applyMiddleware(middleware, thunk, reduxImmutableStateInvariant()))
  );

  store.dispatch(loadCourses());
  store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
