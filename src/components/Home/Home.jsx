import './index.css';
//import getGitData from '../GitApi/index';
import FadeIntro from '../FadeIntro/FadeIntro';

const Home = () => {
    
    return (
        <div className='main-container'>
            <main className='background-image'>
                <FadeIntro />
            </main>
        </div>
    );
    
};

export default Home;