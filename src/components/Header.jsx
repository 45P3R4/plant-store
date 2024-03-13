function Header() {
    return (
        <header>
            <div className="green-bar">
                <div className="container">
                FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.
                </div>
            </div>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <span className="highlight-word">Green</span> Thumb
                    </div>
                    <div className="nav__menu">Home</div>
                    <div className="nav__menu">Products</div>
                    <div className="nav__menu">About us</div>
                    <div className="nav__menu">Contact us</div>
                    <div className="nav__menu">Search</div>
                </nav>
            </div>
            <div className="about">
                <div className="about__container">
                    <div className="about__main">Plants are our Passion</div>
                    <div className="about__other">Even if you don’t have a green thumb, you can still have a green home.</div>
                    <button className="header-button">GET PLANTING</button>
                </div>
                <div className="about__border"></div>
            </div>
        </header>
    )
}

export default Header;