import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from './layout/Header';
import WriterView from './ui/Writer';
import './index.css';

import textReducer from './reducers/text.reducer';
import typingReducer from './reducers/typing.reducer';
import initialState from './initialState';


const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    texts: textReducer,
    typing: typingReducer,
    routing: routerReducer
  }),
  initialState,
  applyMiddleware(middleware)
);

const anotherView = ()=>(
  <div>chickens</div>
);

const Routing = () => (
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={WriterView}/>
        <Route path="/chicken" component={anotherView}/>
      </div>
    </Router>
);


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo')) // from react-router-redux

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
