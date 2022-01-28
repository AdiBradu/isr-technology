import React, { useEffect, useContext } from 'react';
import './menu.component.scss';
import { motion, useAnimation } from 'framer-motion';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch.component.jsx';
import { Link, useMatch } from 'react-router-dom';
import { AppContext } from '../../AppContext';

export default function Menu(props) {

  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;
  const {isMenuOpenObj} = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = isMenuOpenObj;
  const {mobileMenuOpenObj} = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = mobileMenuOpenObj;
  const {isLG} = useContext(AppContext);
  const match = useMatch(`/`);

  const animateMenu = useAnimation();

  const handleJump = (e) => {
    setTimeout(() => {
      let element = document.getElementById(e);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const closeMenu = () => {
    props.handleOpen(!isMenuOpen);
  };

  useEffect(() => {
    if(!isLG){
      animateMenu.set({
        x:'100vw'
      })
      animateMenu.start({
        x:0
      })
    }
  }, [isLG, animateMenu]);
  

  return (
    <motion.div
      className="menu"
      style={
        (themeColor === 'light' && isLG && match)
          ? { color: '#130f33' }
          : { color: '#1dcad3' }
      }
      animate={animateMenu}
    >
      <ul>
        <ToggleSwitch closeMenu={closeMenu} />
        <li>
          <Link
            to="/"
            onClick={() => {
              handleJump('values');
              !isLG && closeMenu();
              setMobileMenuOpen(false);
            }}
            animate={{isMenuOpen} ? {y:0} : {y:"-10"}}
          >
            <p className="navlinks">home</p>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleJump('services');
              !isLG && closeMenu();
              setMobileMenuOpen(false);
            }}
          >
            <p className="navlinks">services</p>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleJump('partners');
              !isLG && closeMenu();
              setMobileMenuOpen(false);
            }}
          >
            <p className="navlinks">partners</p>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleJump('contact');
              !isLG && closeMenu();
              setMobileMenuOpen(false);
            }}
          >
            <p className="navlinks">contact</p>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
