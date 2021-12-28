import { motion } from 'framer-motion';

const PortfolioCards = ({
  images,
  openModal,
  close,
  open,
  handleProjectDisplay,
}) => {
  return (
      //!apply css grid here
    <motion.section className='cards'>
      {images.map((image) => {
        return (
          <div class='flip-card' key={image.id}>
            <div class='flip-card-inner'>
              <div class='flip-card-front'>
                <img src={image.path} alt={image.alt} />
              </div>

              <div class='flip-card-back'>
                <h1>{image.title}</h1>

                <motion.button
                  key={image.id}
                  className='app-link'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    open(image.id);
                  }}
                >
                  Details
                </motion.button>
              </div>
            </div>
          </div>
        );
      })}
    </motion.section>
  );
};

export default PortfolioCards;
