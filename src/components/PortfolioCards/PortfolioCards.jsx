import { motion } from 'framer-motion';

const PortfolioCards = ({ images, openModal, close, open }) => {

        return(
            <motion.section className="cards">
              {images.map((image) => {
                return (

                    <div class="flip-card" key={image.id}>

                        <div class="flip-card-inner">

                            <div class="flip-card-front">
                                <img src={image.path} alt={image.alt} />
                            </div>

                            <div class="flip-card-back">
                                <h1>{image.title}</h1>
                                <motion.button
                                    className='appLink'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={ () => openModal ? close() : open() }
                                >
                                    Details
                                </motion.button>
                                
                                {/* <a href='#'{image.url}
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    onClick={(()=> setShowModal(true))}
                                >
                                    View Application Details
                                </a> */}

                            </div>                          
                        </div>
                    </div>               
            )})}
            </motion.section>
     );
};

export default PortfolioCards;
