import { motion } from 'framer-motion';
import HomeBtn from '../HomeBtn/HomeBtn';
import './ContentContainer.css';

const ContentContainer = () => {

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
        /* <div className='contentContainer'> */
            
            
            <motion.main className='contentContainer'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <HomeBtn />
                <motion.div className="ContentCard">

                </motion.div>
            </motion.main>
        /* </div> */
     );
}
 
export default ContentContainer;