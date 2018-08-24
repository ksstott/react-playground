import * as React from "react";
import * as ReactDOM from "react-dom";

import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { routerForBrowser } from 'redux-little-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { routes } from "./routes";
import { App } from "./app";

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

const store = createStore(
    combineReducers({ router: reducer }),
    {},
    compose(enhancer, applyMiddleware(middleware, reduxImmutableStateInvariant()))
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
