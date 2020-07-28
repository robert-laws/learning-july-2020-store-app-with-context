import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';

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
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
