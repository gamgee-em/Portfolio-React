import './index.css';
//import getGitData from '../GitApi/index';
import { motion } from 'framer-motion';

const Home = () => {

    const hi = 'Hi,';
    const introName = 'I\'m Sam';
    
    return (
        <div className='main-container'>
            <main className='background-image'>

                {/* Try to fade in each character */}
               <motion.section className='introContainer'>
                    <motion.h1 className='hi'
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5, duration: 1.5 }}
                    >
                        { hi }
                    </motion.h1>

                    <motion.h1 className='introName'
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5, duration: 1.75 }}
                    >
                        { introName }
                    </motion.h1>

               </motion.section>
            
            </main>
        </div>
    );
    
};

export default Home;