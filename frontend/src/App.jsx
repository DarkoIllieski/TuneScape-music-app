// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';


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
