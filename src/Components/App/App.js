import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from '../../Routes/Projects/Projects';
import Main from '../../Routes/Main/Main';
import AboutMe from '../../Routes/AboutMe/AboutMe';
import BattleSource from '../../Resources/Images/BattleSource.PNG';
import Cursr from '../../Resources/Images/Cursr.PNG';
import Bookmark from '../../Resources/Images/Bookmark.PNG';
import Quiz from '../../Resources/Images/Quiz.PNG';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      projectImages: [BattleSource, Cursr, Bookmark, Quiz],
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
