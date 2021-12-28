import './index.css';
import PortfolioCards from '../PortfolioCards/PortfolioCards';
import HomeBtn from '../HomeBtn/HomeBtn';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/Modal';

const Portfolio = ({
  modalOpen,
  setModalOpen,
  open,
  close,
  images,
  setImages,
}) => {
  const handleProjectDisplay = (id) => {
    const displayProject = images.filter((image) => image.id === id);
    setImages(displayProject);
  };

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
    <motion.main
      className='portfolio'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <HomeBtn />
      <div className='portfolio-card-body'>
          <h2 className='portfolio-title'> Portfolio </h2>
          <PortfolioCards
            close={close}
            open={open}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleProjectDisplay={handleProjectDisplay}
            images={images}
          />
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal modalOpen={open} handleClose={close} images={images} />
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Portfolio;
