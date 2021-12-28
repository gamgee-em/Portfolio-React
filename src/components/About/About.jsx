import './index.css';
import HomeBtn from '../HomeBtn/HomeBtn';
import aboutImg from './images/sam-nrg-thunderstruck.JPG';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.25, duration: 1 },
    },
    exit: {
      x: '100vw',
      transition: { ease: 'easeOut', duration: 0.5 },
    },
  };

  return (
    <motion.main
      className='about'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <HomeBtn />
      <section className='about-card-body'>
        <h2 className='about-title'> About Me </h2>
        <img
          className='about-img'
          src={aboutImg}
          alt="Sam Sweigart on the Route 'ThunderStruck' in the New River Gorge"
        />
        <p className='about-card-body-content'>
          <span className='hi-there'> Hi There! </span>
          Welcome to my portfolio page. My name is Sam Sweigart. I currently
          reside in Philadelphia, PA and identify as a Full Stack Web Developer.
          In my journey for a new path, I began exploring HTML and CSS. Someone
          who has a near insatiable curiosity for information and problem
          solving, I quickly knew that Web Development was something I wanted to
          pursue.
          <br />
          <br />
          Thank you for stopping by my page and taking the time to get to know
          me a bit better. This space will continue to be a work in progress as
          I polish my current skills and expand my scope into other aspects of
          Web Development. Please check back regularly, as I would love to hear
          any feedback you may have to offer.
        </p>
      </section>
    </motion.main>
  );
};

export default About;