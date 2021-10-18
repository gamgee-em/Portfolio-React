import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
//! import and set alias 
import { Route, Switch, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// try importing path to reduce code
import Intro from './components/Intro/Intro';
import moolahImg from "./images/moolah-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import bucketListImg from "./images/bucket-list-ss.png";
import projectApiImg from "./images/project-api.png";

const App = () => {

  const location = useLocation();

  const [modalOpen, setModalOpen] = useState(false);

  const imageArr = [
    { title: 'Workout Sessions', path: workoutImg, url: 'https://pacific-lowlands-32048.herokuapp.com/?id=6151e3ea6f6df100157c12f5', alt: "Workout Sessions screenshot", id: 1 },
    { title: 'Spend App', path: spendAppImg, url: 'https://thawing-tundra-12672.herokuapp.com/', alt: "Workout Sessions screenshot", id: 2 },
    { title: 'MooLah', path: moolahImg, url: 'https://moolah-tip-tracker.herokuapp.com/', alt: "MooLah Tip Tracker application screenshot", id: 3 },
    { title: 'Team Builder', path: teamBuilderImg, url: 'https://github.com/gamgee-em/Team-Profile-Builder', alt: "Team-Profile-Builder application screenshot", id: 4 },
    { title: 'Bucket List', path: bucketListImg, url: 'https://gamgee-em.github.io/Bucket-List/', alt: "Bucket List application screenshot", id: 5 },
    { title: 'Flobi Events', path: projectApiImg, url: 'https://gamgee-em.github.io/Project-API/', alt: "Flobi Events application screenshot", id: 6 },  
  ];

  const [images, setImages] = useState(imageArr);

  const close = () => {
    setModalOpen(false)
    setImages(imageArr);
    console.clear();
  };
  
  const open = (id) => {
    const displayProject = images.filter(image => image.id === id)
    setImages(displayProject);
    setModalOpen(true)
  };
  
  return (
    
      <div className="App backgroundImage mainContainer">
        <Navbar />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
          >
          <Switch location={ location } key={ location.key }>
            <Route exact path={ ['/','/Portfolio-React'] }>
              <Intro />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio close={close} open={open} modalOpen={modalOpen} setModalOpen={setModalOpen} images={images} />
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