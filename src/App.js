
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact-us';
import Industries from './components/pages/industries';
import Services from './components/pages/services';
import './sass/main.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/about-us" element={<About/>} />          
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/industries" element={<Industries/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/contact-us" element={<Contact/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
