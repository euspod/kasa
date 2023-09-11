
import Navbar from './Navbar.js';
import Banner from'./Banner.js';
import Appartments from './Appartments.js';
import Footer from './Footer.js';
// import Annonces from './Annonces.js';
import logo from './logo.svg';
import './sass/main.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Appartments />
      <Footer />
    </div>
       
  );
}

export default App;
