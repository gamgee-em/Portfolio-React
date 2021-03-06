import './index.css';
import { Link } from 'react-router-dom';


const HomeBtn = () => {

    return (
        <div className="back tool-tip">
            <Link to='/'>
                <img src="https://img.icons8.com/ios-glyphs/60/ffffff/circled-left-2.png" alt='Arrow pointing back to homepage.' rel="noreferrer"/>
                <span className="tool-tip-text">
                    Homepage
                </span>
            </Link>
        </div>
    );
};

export default HomeBtn;