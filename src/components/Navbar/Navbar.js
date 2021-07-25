import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    
    const sayHello = (name) => {
        console.log('Hello! ' + name);
    }

    return (
        <nav>
            <div className='nav-container'>
                <Link onClick={ (e) => {
                    //e.preventDefault();
                    sayHello('Sam');
                    }} to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
};

export default Navbar;