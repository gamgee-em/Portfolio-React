import './index.css';
import moolahImg from "./images/moolah-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import bucketListImg from "./images/bucket-list-ss.png";
import projectApiImg from "./images/project-api.png";
import PortfolioCards from '../PortfolioCards/PortfolioCards';
import HomeBtn from '../HomeBtn/HomeBtn';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/Modal';

const Portfolio = ({ modalOpen, setModalOpen, open, close }) => {

    //const [images, setImages] = useState(null);
    const [images] = useState([
        { title: 'Workout Sessions', path: workoutImg, url: 'https://pacific-lowlands-32048.herokuapp.com/?id=6151e3ea6f6df100157c12f5', alt: "Workout Sessions screenshot", id: 1 },
        { title: 'Spend App', path: spendAppImg, url: 'https://thawing-tundra-12672.herokuapp.com/', alt: "Workout Sessions screenshot", id: 2 },
        { title: 'MooLah', path: moolahImg, url: 'https://moolah-tip-tracker.herokuapp.com/', alt: "MooLah Tip Tracker application screenshot", id: 3 },
        { title: 'Team Builder', path: teamBuilderImg, url: 'https://github.com/gamgee-em/Team-Profile-Builder', alt: "Team-Profile-Builder application screenshot", id: 4 },
        { title: 'Bucket List', path: bucketListImg, url: 'https://gamgee-em.github.io/Bucket-List/', alt: "Bucket List application screenshot", id: 5 },
        { title: 'Flobi Events', path: projectApiImg, url: 'https://gamgee-em.github.io/Project-API/', alt: "Flobi Events application screenshot", id: 6 },  
    ]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: .25, duration: 1 }
        },
        exit: {
            x: '100vw',
            transition: { ease: 'easeOut', duration: .5 }
        },
    };

    return ( 

        <motion.main className='portfolio'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <HomeBtn />
            <div className='portfolio-card-body' >
                <div className="centered">
                    <h2 className='portfolio-title'> Portfolio </h2>
                    <PortfolioCards close={close} open={open} modalOpen={modalOpen} setModalOpen={setModalOpen} images={images} />
                </div>
            </div>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                { modalOpen && <Modal modalOpen={open} handleClose={close} images={images}/> }
            </AnimatePresence>
            

        </motion.main>
     );
};
 
export default Portfolio;