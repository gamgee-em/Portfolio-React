import './index.css';
import HomeBtn from '../HomeBtn/HomeBtn';
import resumeImg from './images/resume.png';
import { motion } from 'framer-motion';

const Resume = ({ images }) => {

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
        <motion.main className="resume"
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <HomeBtn />

            <article className="resume-card-body">

                <section className='skillsCard'>
                    
                    <h2 className='resumeTitle'> Resume </h2>
                    
                    <a href='https://docs.google.com/document/d/1PyBqtCsuwPYuPC8IJ53pEs-H4ZhxnJ_3/edit?usp=sharing&ouid=101696114141993190374&rtpof=true&sd=true' target='_blank' rel="noreferrer" className='resume-link'>
                        <img src={resumeImg} alt="Downloadable PDF of Resume" className="resume-img" />
                    </a>

                    <motion.ul className='languages'>
                        <motion.h5 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .25, duration: 1.25 }}
                        > 
                            Languages 
                        </motion.h5>
                        
                        <motion.li 
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 1.25 }}
                        > HTML </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .35, duration: 1.45 }}
                        > CSS </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .35, duration: 1.65 }}
                        > TypeScript </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .35, duration: 1.85 }}
                        > JavaScript </motion.li>
                      
                    </motion.ul>

                    <motion.ul className='tools'>
                        <motion.h5
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .25, duration: 1.25 }}
                        >
                            Tools
                        </motion.h5>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 1.25 }}
                        >
                            ReactJS
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 1.45 }}
                        >
                            NodeJS
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 1.65 }}
                        >
                            ExpressJS
                            </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 1.85 }}
                        >
                            JQuery
                            </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 2.05 }}
                        >
                            SQL
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 2.25 }}
                        >
                            NoSQL
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 2.45 }}
                        >
                            MongoDB
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 2.65 }}
                        >
                            Mongoose
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 2.85 }}
                        >
                            MySQL
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 3.05 }}
                        >
                            NPM
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .35, duration: 3.25 }}
                        >
                            MERN
                        </motion.li>
                    </motion.ul>
                    
                </section>
            </article>
        </motion.main>
     );
};
 
export default Resume;