import './index.css';
//import getGitData from '../GitApi/index';
import { motion } from 'framer-motion';

const Home = () => {

    const hi = 'Hi';
    const introName = 'I\'m Sam';

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggeredChildren: 0.08,
            },
        },
    };

    const chars = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }
    
    return (
        <div className='main-container'>
            <main className='background-image'>
              {/*  <motion.div className="introContainer">
                   <motion.h2 className="load-screen--message"
                    variants = { sentence }
                    initial = 'hidden'
                    animate = 'visible'
                   >
                       { hi.split(' ').map((char, index) => {
                           return (
                                <span key={ char + '-' + index } variants={chars}>
                                   {char}
                                </span>
                           )
                       })}
                       <br/ >
                       { introName.split(' ').map((char, index) => {
                           return (
                                <motion.span key={ char + '-' + index } variants={chars}>
                                   {char}
                                </motion.span>
                           )
                       })}
                   </motion.h2>
                   
               </motion.div> */}
            </main>
        </div>
    );
    
};

export default Home;