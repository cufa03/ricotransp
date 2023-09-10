import './app.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/index';
import Home from './components/pages/home/Home';
import AboutSection from './components/pages/about';
import OurTrucks from './components/pages/trucks';
import Footer from './components/footer/index';
import ContactUs from './components/pages/contact';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/trucks' exact element={<OurTrucks />}></Route>
        <Route path='/about-section' exact element={<AboutSection />}></Route>
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
