import './index.css';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ handleClose, images }) => {
    
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
    let id = [];

    return (

        <Backdrop onClick={handleClose}>
            {id && images.map(image => {
                // Trying to get only 1 object to display
                //? if key.id === image.id?
                id = (image.id)
                
                console.log('ID:', id)
                console.log('Image:', image.id)
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
                    <span className='modalTitle'> {image.title} </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium


                </motion.p>
                <motion.button
                    className='deployBtn' 
                >
                    <a href={image.url}
                        target='_blank' 
                        rel='noopener noreferrer'
                        key={image.id}
                    >
                        Deploy
                    </a>
                </motion.button>

                <motion.h5>Tech Used</motion.h5>

                <motion.aside className='modalTech'>
                    
                    <motion.ul
                        className='techList1'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .25, duration: 1.25 }}
                    > 
                        
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                    </motion.ul>
                    <motion.ul
                        className='techList2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .25, duration: 1.25 }}
                    > 
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                    </motion.ul>
                </motion.aside>
            </motion.section>
            )})}
        </Backdrop>
        
     );
};
 
export default Modal;