import '../styles/best-selling.css';

function ProductCard(imgId) {
    return (
        <div className="product-card">
            <div className='best-selling-img-container'>
                <div className='text-over'>{imgId.imgId}</div>
                <img alt='img' className='best-selling-image' src={require('../images/best-selling/' + imgId.imgId + '.png')} />
            </div>
            <button>Shop now</button>
        </div>
    )
}

function BestSelling() {
    return (
        <div className="container">
            <div className="section-name"><span className="highlight-word">Best </span>Selling</div>
            <div className="product-container">
                <ProductCard imgId={'indoor-plants'} />
                <ProductCard imgId={'air-purifying-plants'} />
                <ProductCard imgId={'flowering-plants'} />
            </div>
        </div>
    )
}

export default BestSelling;