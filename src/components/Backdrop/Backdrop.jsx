import './index.css';
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => {

     const backdropVariants = {
        hidden: { 
            opacity: 0,
        },
        visible: { 
            opacity: 1,
        },
        exit: { 
            opacity: 0, 
        },
    };

    return ( 
        <motion.section
            className='backdrop'
            onClick={onClick}
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {children}
        </motion.section>
     );
}
 
export default Backdrop;