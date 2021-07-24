import homeBtn from '../HomeBtn/HomeBtn';

const Resume = () => {
    return ( 
        <main className="resume">
            {homeBtn}
            <article className="resume-card-body">
                <section className="resume-card">
                    <a href='https://drive.google.com/file/d/1eDNQRJeGJSx0bIPIuo5tRqKTkDko7B4H/view?usp=sharing' target='_blank' rel="noreferrer">
                        <img src="./PDF/resume.png" alt="Downloadable PDF of Resume" className="resume-img" />
                    </a>
                </section>
            </article>
        </main>
     );
}
 
export default Resume;