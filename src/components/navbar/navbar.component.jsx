import React, { useEffect, useContext, useState } from 'react';
import './navbar.component.scss';
import Logo from '../logo/logo.component.jsx';
import Icon from '../../components/icon/icon.component.jsx';
import Menu from '../../components/menu/menu.component.jsx';
import { Link, useMatch } from 'react-router-dom';
import logoSecondaryColorSimple from '../../assets/logos/logoSecondaryColorSimple.svg';
import logoPrimaryColorSimple from '../../assets/logos/logoPrimaryColorSimple.svg';
import menuIconPrimaryColor from '../../assets/icons/menuIconPrimaryColor.svg';
import menuIconSecondary from '../../assets/icons/menuIconSecondaryColor.svg';
import PhoneAccent from '../../assets/icons/iconPhoneAccent.svg';
import { AppContext } from '../../AppContext';

export default function Navbar(props) {

  const {themeColorObj} = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;
  const {isLG} = useContext(AppContext);
  const {isMenuOpenObj} = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = isMenuOpenObj;
  const { portfolioPageTitleObj } = useContext(AppContext);
  const [portfolioPageTitle, setPortfolioPageTitle] = portfolioPageTitleObj;
  const {mobileMenuOpenObj} = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = mobileMenuOpenObj;
  const match = useMatch(`/`);
 
  useEffect(() => {
    isLG ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }, [isLG, setIsMenuOpen]);

  const handleOpen = () => {
    setIsMenuOpen();
  };

  let menu;

  if (isMenuOpen) {
    menu = <Menu handleOpen={handleOpen}/>;
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    const app = document.getElementById('app');

    let lastScrollTop = 0;

    const position = app.scrollTop;
    setScrollPosition(position);

    if(position < lastScrollTop) {
      navbar.classList.remove('scrolled-down');
      navbar.classList.add('scrolled-up');
    }
    else {
      navbar.classList.remove('scrolled-up');
      navbar.classList.add('scrolled-down');
    }

    if(position > 100 &&  themeColor === "light"){
      navbar.style.backgroundColor = '#fbfbfb';
      if(isLG) {
        navbar.style.padding = '16px';
      }
    } else if (position > 100 &&  themeColor === "dark"){
      navbar.style.backgroundColor = '#130f33';
      if(isLG) {
        navbar.style.padding = '16px';
      }
    } else if (position < 100){
      navbar.classList.remove('scrolled-down');
      navbar.classList.add('scrolled-up');
      navbar.style.backgroundColor = 'rgba(0,0,0,0)';
      if(isLG) {
        navbar.style.padding = '32px';
      }
    }

    lastScrollTop = position;
  };

  useEffect(() => {
    const app = document.getElementById('app');
    app.addEventListener('scroll', () => {handleScroll()}, { passive: true });
    return () => {
      app.removeEventListener('scroll', handleScroll);
    };
  });
  
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content">
        <Link to="/">
          <Logo
            logo={
              !mobileMenuOpen && themeColor === 'light' && match
                ? logoPrimaryColorSimple
                : logoSecondaryColorSimple
            }
            width={'auto'}
            height={isLG ? '40px' : '32px'}
            class={'logo-isr'}
          />
        </Link>
        {/* <div className="call navlinks">
          <a href="tel:+13053289110">
            <p
              className="navlinks"
              style={isLG ? { display: 'flex' } : { display: 'none' }}
            >
              305-328-9110
            </p>
            <Icon icon={PhoneAccent} class={'phone'} />
          </a>
        </div> */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setMobileMenuOpen(!mobileMenuOpen)
          }}
          className="toggle-menu-icon"
          style={isLG ? { display: 'none' } : { display: 'flex' }}
        >
          <img
            src={
              !mobileMenuOpen && themeColor === 'light' && match ? menuIconPrimaryColor : menuIconSecondary
            }
            alt="toggle menu icon"
          />
        </button>
        {menu}
      </div>
    </nav>
  );
}
