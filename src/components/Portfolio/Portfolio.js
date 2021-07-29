import './index.css'
import homeBtn from '../HomeBtn/HomeBtn';
import bucketListImg from "./images/bucket-list-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import techBlogImg from "./images/tech-blog.png";
import projectApiImg from "./images/project-api.png";
import { useState } from 'react';

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
                    <section className="cards">
                        {images.map((image) => {
                            return(
                            <div className="card"  key={image.id}>
                                <h4>{image.title}</h4>
                                <a className="card" href={image.url} target='_blank' rel='noreferrer'>
                                    <img src={image.path} alt={image.alt} className="portfolio-img" />
                                </a>
                            </div>
                        )})}
                        

                        {/* <div className="card">
                            <h4>Workout Sessions</h4>
                            <a className="card" href="https://github.com/gamgee-em/Workout-Sessions" target="_blank" rel="noreferrer">
                                <img src={workoutImg} alt="Workout Sessions screenshot" className="portfolio-img" />
                            </a>
                        </div> */}
                        
                        {/* <div className="card">
                            <h4>Spend App</h4>
                            <a className="card" href="https://github.com/gamgee-em/spend-app" target="_blank" rel="noreferrer">
                                <img src={spendAppImg} alt="Spend App screenshot" className="portfolio-img" />
                            </a>
                        </div>
                        <div className="card">
                            <h4>Bucket List</h4>
                            <a className="card" href="https://github.com/gamgee-em/Bucket-List" target="_blank" rel="noreferrer">
                                <img src={bucketListImg} alt="Bucket List screenshot" className="portfolio-img" />
                            </a>
                        </div>
                        <div className="card">
                            <h4>Team Builder</h4>
                            <a className="card" href="https://github.com/gamgee-em/Team-Profile-Builder" target="_blank" rel="noreferrer">
                                <img src={teamBuilderImg} alt="Team Profile Builder screenshot" className="portfolio-img" />
                            </a>
                        </div>
                        <div className="card">
                            <h4>All Things Tech</h4>
                            <a className="card" href="https://github.com/gamgee-em/Tech-Blog" target="_blank" rel="noreferrer">
                                <img src={techBlogImg} alt="All Things Tech screenshot" className="portfolio-img" />
                            </a>
                        </div>
                        <div className="card">
                            <h4>Flobi Events</h4>
                            <a className="card" href="https://github.com/gamgee-em/Project-API" target="_blank" rel="noreferrer">
                                <img src={projectApiImg} alt="Project API screenshot" className="portfolio-img" />
                            </a>
                        </div>            */}
                    </section>
                </div>
            </div>
        </main>
        
     );
}
 
export default Portfolio;