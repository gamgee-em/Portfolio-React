import './index.css';
import homeBtn from '../HomeBtn/HomeBtn';
import aboutImg from './images/sam-nrg-thunderstruck.JPG';

const About = () => {

    return ( 
        <main className='about'>
            {homeBtn}
            <section className="about-card-body">
                <article className="about-card-img">
                    <img src={aboutImg} alt="Sam Sweigart on the Route 'ThunderStruck' in the New River Gorge" />
                </article>
                <article className="about-card-body-content">
                    <p>
                        Hi There! Welcome to my portfolio page. My name is Sam Sweigart. I currently identify as a Front-End Web Developer and am in the pursuit of my Full-Stack identity. 
                        For most of my life, I have held a passion for high-level performance and the finer details in what it takes to get there.
                        In my journey for a new path, I began exploring html and css. Living life as someone who has a near insatiable curiousity for information and problem solving, 
                        I quickly knew that Web Development is something I wanted to explore and with time, become proficient in. 
                        Thank you for stopping by my page and taking the time to get to know me a bit better. This space will continue to be a work in progress as I polish my current skills and expand my scope into other aspects of Web Development. 
                        Please check in regularly and I would love to hear any feedback you may have to offer.
                    </p>
                </article>
            </section>
        </main>
     );
};
 
export default About;