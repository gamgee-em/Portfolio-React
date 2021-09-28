import './index.css';
import HomeBtn from '../HomeBtn/HomeBtn';
import resumeImg from './images/resume.png';
import { motion } from 'framer-motion';

const Resume = () => {
    return ( 
        <main className="resume">
            <HomeBtn />
            <article className="resume-card-body">
                <section className='skillsCard'>
                    
                    <motion.ul className='languages'>
                        <h5> Languages </h5>
                        
                        <motion.li 
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.25 }}
                        > HTML </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .5, duration: 1.45 }}
                        > CSS </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .5, duration: 1.65 }}
                        > TypeScript </motion.li>
                        <motion.li
                               initial={{ y: 1000, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ delay: .5, duration: 1.85 }}
                        > JavaScript </motion.li>
                      
                    </motion.ul>

                    <motion.ul className='libraries'>
                        <h5>Tools</h5>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.25 }}
                        >
                            ReactJS
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.25 }}
                        >
                            NodeJS
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.45 }}
                        >
                            ExpressJS
                            </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.65 }}
                        >
                            SQL
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 1.85 }}
                        >
                            NoSQL
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 2.05 }}
                        >
                            MongoDB
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 2.25 }}
                        >
                            Mongoose
                        </motion.li>
                        <motion.li
                            initial={{ y: 1000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: 2.5 }}
                        >
                            MySQL
                        </motion.li>
                    </motion.ul>
                </section>
                <section className="resume-card">
                    <a href='https://drive.google.com/file/d/1eDNQRJeGJSx0bIPIuo5tRqKTkDko7B4H/view?usp=sharing' target='_blank' rel="noreferrer">
                        <img src={resumeImg} alt="Downloadable PDF of Resume" className="resume-img" />
                    </a>
                </section>
            </article>
        </main>
     );
};
 
export default Resume;