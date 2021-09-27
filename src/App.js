import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
//! import and set alias 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App background-image main-container">
        <Navbar />
        <Switch>
          <Route exact path={ ['/','/Portfolio-React'] }>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/resume'>
            <Resume />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;