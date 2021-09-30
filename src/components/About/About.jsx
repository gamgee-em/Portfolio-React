import './index.css';
import HomeBtn from '../HomeBtn/HomeBtn';
import aboutImg from './images/sam-nrg-thunderstruck.JPG';

const About = () => {

    return ( 
        <main className='about'>
            <HomeBtn />
            <section className="about-card-body">
                <article className="about-card-img">
                    <h2 className='about-title'> About Me </h2>
                    <img className='aboutImg' src={aboutImg} alt="Sam Sweigart on the Route 'ThunderStruck' in the New River Gorge" />
                </article>
                <article className="about-card-body-content">
                    <p>
                        <span className='hi-there'> Hi There! </span> 
                        Welcome to my portfolio page. My name is Sam Sweigart. 
                        I currently reside in Philadelphia, PA and identify as a Full Stack Web Developer.
                        In my journey for a new path, I began exploring HTML and CSS. 
                        Someone who has a near insatiable curiosity for information and problem solving, 
                        I quickly knew that Web Development was something I wanted to pursue.
                    </p>
                        <p>
                        Thank you for stopping by my page and taking the time to get to know me a bit better. 
                        This space will continue to be a work in progress as I polish my current skills and expand my scope into other aspects of Web Development. 
                        Please check back regularly, as I would love to hear any feedback you may have to offer.
                    </p>
                </article>
            </section>
        </main>
     );
};
 
export default About;