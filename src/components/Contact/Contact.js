import homeBtn from '../HomeBtn/HomeBtn';
import './index.css';

const Contact = () => {
    return ( 
        <div className="contact">
            {homeBtn}
            <div className='contact-card-body'>
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="title">Contact Me</h2>
                                    <p>
                                        I would love your feedback! Please contact me with suggestions or work opportunities. Thank you!
                                    </p>
                                    <hr/>
                                    <form id="contact-form" /* onSubmit={this.submitEmail.bind(this)}  */
                                            method="POST">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input placeholder = "Name"  id="name" type="text" 
                                                    className="form-control" /* required value={this.state.name} 
                                                    onChange={this.onNameChange.bind(this)} *//>
                                                </div>
                                                <div className="col-md-6">
                                                    <input placeholder = "Your Email"  id="email" type="email"
                                                    className="form-control" aria-describedby="emailHelp"
                                                    required /* value={this.state.email} onChange=
                                                    {this.onEmailChange.bind(this)} *//>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input placeholder = "Subject"  id="subject" type="text"
                                            className="form-control" /* required value={this.state.subject}
                                            onChange={this.onSubjectChange.bind(this)} *//>
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder = "Message"  id="message" 
                                            className="form-control" rows="1" 
                                            /*required value= {this.state.message}
                                            onChange= {this.onMsgChange.bind(this)} *//>
                                        </div>
                                        <button type="submit" className="submit">Submit</button>
                                    </form>
                                    <section className="social-icons">
                                        <img src="https://img.icons8.com/material-two-tone/24/000000/github.png"/>
                                        <img src="https://img.icons8.com/material-two-tone/24/000000/linkedin--v1.png"/>
                                        <img src="https://img.icons8.com/material-two-tone/24/000000/stack-of-tweets.png" className=""/>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Contact;