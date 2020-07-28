import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShopState from './context/shop/ShopState';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';

import './App.scss';

function App() {
  return (
    <ShopState>
      <div className='App'>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Products} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/about' component={About} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    </ShopState>
  );
}

export default App;
