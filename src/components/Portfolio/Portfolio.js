import './index.css';
import homeBtn from '../HomeBtn/HomeBtn';
import bucketListImg from "./images/bucket-list-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import techBlogImg from "./images/tech-blog.png";
import projectApiImg from "./images/project-api.png";
import { useState } from 'react';
import PortfolioCards from '../PortfolioCards/PortfolioCards';

const Portfolio = () => {

    const [images, setImages] = useState([
        { title: 'Workout Sessions', path: workoutImg, url: 'https://github.com/gamgee-em/Workout-Sessions', alt: "Workout Sessions screenshot", id: 1 },
        { title: 'Spend App', path: spendAppImg, url: 'https://github.com/gamgee-em/spend-app', id: 2 },
        { title: 'Bucket List', path: bucketListImg, url: 'https://github.com/gamgee-em/Bucket-List', id: 3 },
        { title: 'Team Builder', path: teamBuilderImg, url: 'https://github.com/gamgee-em/Team-Profile-Builder', id: 4 },
        { title: 'All Things Tech', path: techBlogImg, url: 'https://github.com/gamgee-em/Tech-Blog', id: 5 },
        { title: 'Flobi Events', path: projectApiImg, url: 'https://github.com/gamgee-em/Project-API', id: 6 },
    ]);

    return ( 
        <main className='portfolio'>
            {homeBtn}
            <div className='portfolio-card-body'>
                <div className="centered">
                    <PortfolioCards images={images}/>
                </div>
            </div>
        </main>
     );
};
 
export default Portfolio;