import homeBtn from '../HomeBtn/HomeBtn';
import bucketListImg from "./images/bucket-list-ss.png";
import workoutImg from "./images/workout-sessions.png";
import spendAppImg from "./images/spend-app-ss.png";
import teamBuilderImg from "./images/team-profile-builder.png";
import techBlogImg from "./images/tech-blog.png";
import projectApiImg from "./images/project-api.png";

const Portfolio = () => {
    return ( 

        <main className='portfolio'>
            {homeBtn}
            <div className='portfolio-card-body'>
                <div className="centered">
                    <section class="cards">

                        <a className="card" href="https://github.com/gamgee-em/Workout-Sessions" target="_blank" rel="noreferrer">
                            <img src={workoutImg} alt="Workout Sessions screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/spend-app" target="_blank" rel="noreferrer">
                            <img src={spendAppImg} alt="Spend App screenshot" className="portfolio-img" />
                        </a>
                        
                        <a className="card" href="https://github.com/gamgee-em/Bucket-List" target="_blank" rel="noreferrer">
                            <img src={bucketListImg} alt="Bucket List screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Team-Profile-Builder" target="_blank" rel="noreferrer">
                            <img src={teamBuilderImg} alt="Team Profile Builder screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Tech-Blog" target="_blank" rel="noreferrer">
                            <img src={techBlogImg} alt="All Things Tech screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Project-API" target="_blank" rel="noreferrer">
                            <img src={projectApiImg} alt="Project API screenshot" className="portfolio-img" />
                        </a>
                    </section>
                </div>
            </div>
        </main>
        
     );
}
 
export default Portfolio;