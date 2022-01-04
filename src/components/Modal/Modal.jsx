import './index.css';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ handleClose, images }) => {
    
    let id = [];

    const modalVariants = {
        hidden: { 
            y:'-100vh',
            opacity: 0 
        },
        visible: { 
            y:'0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: { 
            y:'100vh',
            opacity: 0,
        },
    };

    return (

        <Backdrop onClick={handleClose}>
            
            {id && images.map((image)=> {
                id = (image.id)
        
                return ( 
                    <motion.section
                        onClick={(e) => e.stopPropagation()}
                        className='portModal'
                        key={image.id}
                        variants={ modalVariants }
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .25, duration: 1.25 }}
                        > 
                            <span className='modalTitle'> {image.title} </span> 
                            
                            {image.description}
                            
                        </motion.p>
                            <motion.button className='deployBtn'>
                            <a href={image.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                key={image.id}
                            >
                                Deploy
                            </a>
                            </motion.button>
                            <motion.button className='repoBtn'>
                                <a href={image.repo}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    key={image.id}
                                >
                                    Repo
                                </a>
                            </motion.button>
                    </motion.section>
                )}
            )}
        </Backdrop>
    );
};

export default Modal;