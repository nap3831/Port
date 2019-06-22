import React, { Component } from 'react';
import './App.css';
import Home from './Page/Home';
import About from './Page/About';
import Portfolio from './Page/Portfolio';
import PortfolioDetail from './Page/PortfolioDetail';
import Contact from './Page/Contact';
import Navbar from './Components/Navbar';
import Error from './Page/Error';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/PortfolioDetail" component={PortfolioDetail} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>

    );
  }
}

export default App;
