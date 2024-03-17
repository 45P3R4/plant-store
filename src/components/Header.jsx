import './../styles/header.css';

function FreeShipping() {
    return (
        <div className="green-bar">
        <div className="container">
        FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.
        </div>
    </div>
    )
}

function NavigationBar() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <span className="highlight-word">Green</span> Thumb
            </div>
            <a href="#!" className="nav__menu">Home</a>
            <a href="#!" className="nav__menu">Products</a>
            <a href="#!" className="nav__menu">About us</a>
            <a href="#!" className="nav__menu">Contact us</a>
            <a href="#!" className="nav__menu">Search</a>
        </nav>
    )
}

function Header() {
    return (
        <header>
           <FreeShipping />
            <div className="container">
                <NavigationBar />
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