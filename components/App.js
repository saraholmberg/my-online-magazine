import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CardSection from './CardSection';
import ColoredBox from './ColoredBox';

const Home = () => {
  return (
    <div>
      <Link to="/"></Link>
      <br />
      <CardSection />
      <ColoredBox />
    </div>
  );
};

const Articles = () => {
  return (
    <div>
      <Link to="/Articles"></Link>
      <br />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Link to="/About"></Link>
      <br />
      About
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="navigation">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/articles" className="item">
            Articles
          </Link>
          <div className="right menu">
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
