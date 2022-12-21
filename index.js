import React, { Component } from 'react';
import { render } from 'react-dom';
import Apps from './components/App';
import TopSectionImg from './components/TopSectionImg';
import Footer from './components/Footer';
import Copyright from'./components/Copyright';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="center-container">
        <TopSectionImg />
        <h1 className="logotype">Voize</h1>
        <p>Make yourself heard</p>
        <Apps />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
