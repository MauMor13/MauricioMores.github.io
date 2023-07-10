import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';
import Loading from './components/pure/Loading';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    isLoading ? <Loading /> : 
    <>
    <BrowserRouter class="container_body">
    <Header/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
