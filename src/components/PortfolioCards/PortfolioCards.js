const PortfolioCards = ({ images }) => {
        return(
            <section className="cards">
             {images.map((image) => {
                return (
                <div className="card"  key={image.id}>
                    <h4>{image.title}</h4>
                    <a className="card" href={image.url} target='_blank' rel='noreferrer'>
                        <img src={image.path} alt={image.alt} className="portfolio-img" />
                    </a>
                </div>)
            })}
            </section>
     );
}
 
export default PortfolioCards;