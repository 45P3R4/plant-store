function BestSelling() {
    return(
        <div className="container">
            <div className="section-name"><span className="highlight-word">Best </span>Selling</div>
            <div className="product-container">
                <div className="product-card">
                    <div className="best-selling-image indoor-plants"></div>
                    <button>Shop now</button>
                </div>
                <div className="product-card">
                    <div className="best-selling-image air-purifying-plants"></div>
                    <button>Shop now</button>
                </div>
                <div className="product-card">
                    <div className="best-selling-image flowering-plants"></div>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default BestSelling;