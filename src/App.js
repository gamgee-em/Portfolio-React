import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
//! import and set alias 
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  
  const location = useLocation();

  return (
    
      <div className="App background-image main-container">
        <Navbar />
        <AnimatePresence>
          <Switch location={ location } key={ location.key }>
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
        </AnimatePresence>
        <Footer />
      </div>
  );
}

export default App;