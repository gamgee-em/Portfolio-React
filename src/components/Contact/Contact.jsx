import './index.css';
import Social from '../Social/Social';
import HomeBtn from '../HomeBtn/HomeBtn';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.25, duration: 1 },
    },
    exit: {
      x: '100vw',
      transition: { ease: 'easeOut', duration: 0.5 },
    },
  };

  return (
    <motion.div
      className='contact'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <HomeBtn />

      <div className='contact-card-body'>
        <section className='contact-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title'>
                  <h2 className='title'>Contact Me</h2>
                  <p>
                    I would love your feedback! Please contact me with
                    suggestions or work opportunities. Thank you!
                  </p>
                  <hr />
                  <form id='contact-form' method='POST'>
                    <div className='form-group'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <input
                            placeholder='Name'
                            id='name'
                            type='text'
                            className='form-control'
                          />
                        </div>
                        <div className='col-md-6'>
                          <input
                            placeholder='Your Email'
                            id='email'
                            type='email'
                            className='form-control'
                            aria-describedby='emailHelp'
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <input
                        placeholder='Subject'
                        id='subject'
                        type='text'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        placeholder='Message'
                        id='message'
                        className='form-control'
                        rows='1'
                      />
                    </div>
                    <button type='submit' className='submit'>
                      Submit
                    </button>
                  </form>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
