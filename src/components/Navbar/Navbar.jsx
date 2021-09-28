import './index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

    return (
        <nav>
            <div className='nav-container'>

                <Link to='/about'>
                    <motion.li whileHover = {{ scale: 1.2 }}> About </motion.li>
                </Link>

                <Link to='/portfolio'>
                    <motion.li whileHover = {{ scale: 1.2 }}> Portfolio </motion.li>
                </Link>

                <Link to='/resume'>
                    <motion.li whileHover = {{ scale: 1.2 }}> Resume </motion.li>
                </Link>

                <Link to='/contact'>
                    <motion.li whileHover = {{ scale: 1.2 }}> Portfolio </motion.li>
                </Link>

            </div>
        </nav>
    );

};

export default Navbar;