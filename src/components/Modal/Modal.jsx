import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const Modal = ({ showModal, setShowModal }) => {
    
    return (
        <AnimatePresence exitBeforeEnter>
            
                { showModal && (
                <motion.section className="port-modal"
                    variants={ modalVariants }
                    initial='hidden'
                    animate='visible'
                >
                    <h2>Technologies Used</h2>
                </motion.section>
                )}
            
        </AnimatePresence>

        
     );
};
 
export default Modal;