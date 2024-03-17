import '../styles/deals.css';
import '../styles/common.css';

function DealsCard(dealId) {
    return (
        <div className="product-card">
             <img alt="deal" className='deals-image' src={require('../images/deals/' + dealId.dealId + '.png')} />
             <div className="product-name">{dealId.dealId}</div>
             <div className="product-price">$ 350 <span className="product-old-price">$ 450</span>
             </div>
             <button>Buy</button>
        </div>
    )
}

function Deals() {
    return (
        <div className="container">
            <div className="section-name"><span className="highlight-word">Ferntastic </span>Deals</div>
            <div className="product-container">
                <DealsCard dealId="string-of-hearts"/>
                <DealsCard dealId="red-scarlet-alocasia"/>
                <DealsCard dealId="jewel-alocasia"/>
                <DealsCard dealId="hoya-retusa"/>
            </div>
        </div>
    )
}

export default Deals;