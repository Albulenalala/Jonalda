import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/Navbar';
import Home from './Components/Home';
import Books from './Components/Books';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer'; 
import Enciklopedia from "./Components/Enciklopedia"




const App = () => (
    <Router>
        <MyNavbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enciklopedia" element={<Enciklopedia />} />
          

        </Routes>
 
         <Footer />
    </Router>
    
);

export default App;
