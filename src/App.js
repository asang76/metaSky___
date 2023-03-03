
import About from './layout/About';
import Banner from './layout/Banner';
import Navbar from './layout/Navbar';
// import Testimonial from './layout/Testimonial'
import Investor from './layout/investor';
import Graphics from './layout/Graphics';
import Web3 from './layout/Web3';
import Testimonial from './layout/Testimonial';
import Footer from './layout/Footer'

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Banner/>
  <About/>
  <Graphics/>
  <Web3/>
  <Investor/>
  <Testimonial/>
  <Footer/>
    </div>
  );
}

export default App;
