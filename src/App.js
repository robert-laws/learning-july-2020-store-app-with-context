import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
