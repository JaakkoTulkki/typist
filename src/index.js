import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Header from './layout/Header';
import WriterView from './ui/Writer';
import { Route }from 'react-router-dom'
import './index.css';
import reducers from './reducer';


const HomePage = () => {
  return (
    <WriterView />
  );
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const Routing = () => (
  <ConnectedRouter>
    <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
    </div>
  </ConnectedRouter>
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
