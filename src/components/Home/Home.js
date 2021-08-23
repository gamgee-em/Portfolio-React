import './index.css';
import getGitData from '../Gitapi/index';

const Home = () => {
    getGitData();

    return (
        <div className='main-container'>
            <main className='background-image'>
                
            </main>
        </div>
    );
};

export default Home;