import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import WriterView from './ui/Writer';

import {
BrowserRouter as Router,
Route,
} from 'react-router-dom'

import './index.css';


const HomePage = () => {
  return (
    <WriterView />
  );
};

const Routing = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
    </div>
  </Router>
);


ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
