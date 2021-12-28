import './Intro.css';
import { AnimatePresence, motion } from 'framer-motion';

const Intro = () => {

    const hi = 'Hi,';
    const introName = 'I\'m Sam';
    

    return ( 
        <AnimatePresence>
            <motion.section className='introContainer'>
                <motion.h1 className='hi'
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: .15, duration: 1.35 }}
                >
                    { hi }
                </motion.h1>

                <motion.h1 className='introName'
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: .15, duration: 1.55 }}
                >
                    { introName }
                </motion.h1>

            </motion.section>
        </AnimatePresence>
        
     );
}
 
export default Intro;