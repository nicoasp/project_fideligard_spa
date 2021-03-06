import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Navbar from './Navbar';
import StocksContainer from '../containers/StocksContainer';
import SliderContainer from '../containers/SliderContainer';

const App = () => (
  <div className="container-fluid">
    <Router>
      <ScrollToTop>
        <Navbar />
        <section className="col-sm-5">
          <StocksContainer />
        </section>
        <main className="col-sm-7">
          <SliderContainer />
          <Switch>

          </Switch>

        </main>
      </ScrollToTop>
    </Router>
  </div>
);

export default App;
