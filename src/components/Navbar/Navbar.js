import './index.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav>
            <div className='nav-container'>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;