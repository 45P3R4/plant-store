import Header from './components/Header';
import Categories from './components/Categories';
import BestSelling from './components/BestSelling';
import Hottest from './components/Hottest';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <BestSelling />
      <Hottest />
      <Deals />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
