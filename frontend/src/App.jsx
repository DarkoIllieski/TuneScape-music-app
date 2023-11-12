// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header.js/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
