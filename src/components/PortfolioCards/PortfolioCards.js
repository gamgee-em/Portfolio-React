const PortfolioCards = ({ images }) => {
        return(
            <section className="cards">
              {images.map((image) => {
                return (
                    <div class="flip-card" key={image.id}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={image.path} alt={image.alt} />
                            </div>
                            <div class="flip-card-back">
                                <h1>{image.title}</h1>
                                <a href={image.path}>GitHub Repo</a>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    

                 
            )})} 
            </section>
     );
};
 
export default PortfolioCards;