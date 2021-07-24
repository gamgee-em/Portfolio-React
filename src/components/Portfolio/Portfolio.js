import homeBtn from '../HomeBtn/HomeBtn';

const Portfolio = () => {
    return ( 

        <main className='portfolio'>
            {homeBtn}
            <div className='portfolio-card-body'>
                <div className="centered">
                    <section class="cards">

                        <a className="card" href="https://github.com/gamgee-em/Workout-Sessions" target="_blank" rel="noreferrer">
                            <img src="/images/workout-sessions.png" alt="Workout Sessions screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/spend-app" target="_blank" rel="noreferrer">
                            <img src="/images/spend-app-ss.png" alt="Spend App screenshot" className="portfolio-img" />
                        </a>
                        
                        <a className="card" href="https://github.com/gamgee-em/Bucket-List" target="_blank" rel="noreferrer">
                            <img src="/images/bucket-list-ss.png" alt="Bucket List screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Team-Profile-Builder" target="_blank" rel="noreferrer">
                            <img src="/images/team-profile-builder.png" alt="Team Profile Builder screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Tech-Blog" target="_blank" rel="noreferrer">
                            <img src="/images/tech-blog.png" alt="All Things Tech screenshot" className="portfolio-img" />
                        </a>

                        <a className="card" href="https://github.com/gamgee-em/Project-API" target="_blank" rel="noreferrer">
                            <img src="/images/project-api.png" alt="Project API screenshot" className="portfolio-img" />
                        </a>
                    </section>
                </div>
            </div>
        </main>
        
     );
}
 
export default Portfolio;