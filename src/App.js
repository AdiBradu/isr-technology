import React from 'react';
import './App.scss';
import { handleViewportHeight } from './utils.js';
import HomePage from './pages/home/homePage.component.jsx';
import PortfolioItemPage from './pages/portfolioItem/portfolioItem.component.jsx';
import { Helmet } from 'react-helmet';
import { useEffect, useContext } from 'react';
import Navbar from './components/navbar/navbar.component.jsx';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './AppContext';

function App() {
  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;

  const { toggleSwitcherObj } = useContext(AppContext);
  const [isToggled, setIsToggled] = toggleSwitcherObj;

  const { portofolioPageIdObj } = useContext(AppContext);
  const [portofolioPageId, setPortofolioPageId] = portofolioPageIdObj;

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        e.matches ? setIsToggled(true) : setIsToggled(false);
      });
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        setIsToggled(true);
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [setIsToggled, themeColor]);

  useEffect(() => {
    if (isToggled) {
      setThemeColor('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setThemeColor('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isToggled, setThemeColor]);

  return (
    <div className="App" data-theme={themeColor} id="app">
      <Helmet>
        <title>ISR Technology</title>
        <meta
          name="description"
          content="ISR Technology - USA, MIAMI, FL. Our services: managed IT, wireless systems, networking, audio/visual, cybersecurity, VOIP, cloud services, security."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/managed-it" element={<PortfolioItemPage />} />
        <Route path="/services/security" element={<PortfolioItemPage />} />
        <Route path="/services/audio-visual" element={<PortfolioItemPage />} />
        <Route path="/services/wireless-systems" element={<PortfolioItemPage />} />
        <Route path="/services/cloud-services" element={<PortfolioItemPage />} />
        <Route path="/services/cybersecurity" element={<PortfolioItemPage />} />
        <Route path="/services/voip" element={<PortfolioItemPage />} />
        <Route path="/services/networking" element={<PortfolioItemPage />} />
        <Route path="/services/smarthome-automation" element={<PortfolioItemPage />} />
      </Routes>
    </div>

  );
}

export default App;
