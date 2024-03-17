import '../styles/categories.css';

function Category(categoryId) {
    return (
        <div className="best-selling-card">
            <img alt="category" className='category-picture' src={require('../images/categories/' + categoryId.categoryId + '.png')} />
            {categoryId.categoryId}
        </div>
    )
}

function Categories() {
    return (
        <div className="container">
            <div className="categories">
                <div className="section-name">
                    <span className="highlight-word">Shop</span> by Category
                </div>
                <div className="categories-container">
                    <Category categoryId="bonsai"/>
                    <Category categoryId="cacti"/>
                    <Category categoryId="creepers"/>
                    <Category categoryId="succulents"/>
                    <Category categoryId="seeds"/>
                    <Category categoryId="gifts"/>
                </div>
            </div>
        </div>
    )
}

export default Categories;