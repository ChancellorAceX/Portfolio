import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Projects from '../Routes/Projects/Projects';
import Main from '../Routes/Main/Main';
import AboutMe from '../Routes/AboutMe/AboutMe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      projectImages: [require('../Resources/Images/BattleSource.PNG'),require('../Resources/Images/Cursr.PNG'),require('../Resources/Images/Bookmark.PNG'),require('../Resources/Images/Quiz.PNG')],
    };
  };

  render() {
    console.log(this.state.projectImages)
    return (
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path='/about'>
                <AboutMe />
              </Route>
              <Route path='/projects'>
                <Projects projectImages={this.state.projectImages}/>
              </Route>
              <Route path='*'>
                <Main />
              </Route>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
