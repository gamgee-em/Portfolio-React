import './index.css';
import { motion } from 'framer-motion';

const Social = () => {

    return (
        <section className="social-icons">
            <p className="contact-number">267.666.8499</p>
           
            <a href="https://github.com/gamgee-em" rel="noreferrer" target='_blank' className="github">
                <img src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="GitHub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/sam-sweigart/" rel="noreferrer"  target='_blank' className="linked-in">
                <img src="https://img.icons8.com/material-two-tone/24/000000/linkedin--v1.png" alt="LinkedIn Icon"/>
            </a> 
            <a href="https://twitter.com/" rel="noreferrer" target='_blank' className="twitter">
                <img src="https://img.icons8.com/material-two-tone/24/000000/stack-of-tweets.png" alt="Twitter Icon"/>
            </a>
            
            <motion.p className="contact-email"
                whileHover = {{ scale: 1.1 }}
            >
                <a className='email-link' href="mailto:samuel.sweigart@gmail.com">samuel.sweigart@gmail.com</a>
            </motion.p>          
            
        </section>
    );
};

export default Social;