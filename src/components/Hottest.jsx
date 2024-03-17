import '../styles/hottest.css';

function HottestCard(productId) {
    return (
        <div className="product-card">
            <img alt="product" className='hottest-image' src={require('../images/hottest/' + productId.productId + '.png')} />
            <div className="product-name">{productId.productId}</div>
            <div className="product-price">$ 350</div>
            <button>Buy</button>
        </div>
    )
}

function Hottest() {
    return(
        <div className="color-section">
            <div className="container">
                <div className="section-name"><span className="highlight-word">Hottest</span> Plants</div>
                <div className="hottest-container">
                    <HottestCard productId="marble-queen"/>
                    <HottestCard productId="neon-pothos"/>
                    <HottestCard productId="syngonium-rayuji"/>
                    <HottestCard productId="peruvian-cactus"/>

                    <HottestCard productId="pineapple"/>
                    <HottestCard productId="african-milk-tree"/>
                    <HottestCard productId="pothos"/>
                    <HottestCard productId="chinese-evergreen"/>
                </div>
            </div>
        </div>
    )
}

export default Hottest;