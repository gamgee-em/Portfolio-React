import './index.css';
import moolahImg from "./images/signin-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import techBlogImg from "./images/tech-blog.png";
import projectApiImg from "./images/project-api.png";
import { useState } from 'react';
import PortfolioCards from '../PortfolioCards/PortfolioCards';
import HomeBtn from '../HomeBtn/HomeBtn';
import { useEffect } from 'react';

const Portfolio = () => {

    //const [images, setImages] = useState(null);
    const [images, setImages] = useState([
        { title: 'Workout Sessions', path: workoutImg, url: 'https://pacific-lowlands-32048.herokuapp.com/?id=6151e3ea6f6df100157c12f5', alt: "Workout Sessions screenshot", id: 1 },
        { title: 'Spend App', path: spendAppImg, url: 'https://thawing-tundra-12672.herokuapp.com/', alt: "Workout Sessions screenshot", id: 2 },
        { title: 'MooLah', path: moolahImg, url: 'https://moolah-tip-tracker.herokuapp.com/', alt: "MooLah Tip Tracker application screenshot", id: 3 },
        { title: 'Team Builder', path: teamBuilderImg, url: 'https://github.com/gamgee-em/Team-Profile-Builder', alt: "Team-Profile-Builder application screenshot", id: 4 },
        { title: 'All Things Tech', path: techBlogImg, url: 'https://github.com/gamgee-em/Tech-Blog', alt: "Tech Blog application screenshot", id: 5 },
        { title: 'Flobi Events', path: projectApiImg, url: 'https://github.com/gamgee-em/Project-API', alt: "Flobi Events application screenshot", id: 6 },  
    ]);

   /*  useEffect(() => {
        fetch('https://api.github.com/users/gamgee-em/starred')
            .then(res => {
                return res.json();
            }).then(data => {
                console.log('Data', data);
                setImages(data);
            })
    }, []); */

    return ( 
        <main className='portfolio'>
            <HomeBtn />
            <div className='portfolio-card-body'>
                <div className="centered">
                    <PortfolioCards images={images}/>
                </div>
            </div>
        </main>
     );
};
 
export default Portfolio;