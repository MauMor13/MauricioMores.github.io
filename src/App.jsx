import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';
import Loading from './components/pure/Loading';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

const AppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className='container_body'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Technologies" element={<Technologies />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </StyleSheetManager>
  )
}


function App() {
  return <AppLoading />;
}
export default App
