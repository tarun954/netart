import { Route, Routes } from 'react-router-dom';
import './App.css';   
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Feature from './components/Navbar/Feature';
import Home from './components/Home';  
import Faqs from './components/Footer/Faqs';
import Terms from './components/Footer/Terms';
import Privacy from './components/Footer/Privacy'

function App() {
   
  
  return (
    <>
    <div className="App">
     
        <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<About/>} path="/about"/> 
        <Route element={<Feature/>} path="/feature"/>
        <Route element={<Faqs/>} path="/faqs" />
        <Route element={<Terms />} path="/terms" />
        <Route element={<Privacy/>} path="/privacy" />
        </Routes>
    </div>
    </>
  );
}

export default App;
