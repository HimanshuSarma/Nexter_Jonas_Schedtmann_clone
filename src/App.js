import './App.css';
import './Header/Header';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import Plans from './Plans/Plans';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App main-grid">
      <div className="sidebar-div">
        <Sidebar />
      </div>
      <div className="main-content">
        <Header />
        <Features />
        <Testimonials />
        <Plans />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
