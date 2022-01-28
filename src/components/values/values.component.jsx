import React, { useContext } from 'react';
import './values.component.scss';
import Value from '../../components/value/value.component.jsx';
import Logo from '../../components/logo/logo.component.jsx';
import { AppContext } from '../../AppContext';
import {motion} from 'framer-motion';
import logoSecondaryColorFull from '../../assets/logos/logoSecondaryColorFull.svg';
import logoPrimaryColorFull from '../../assets/logos/logoPrimaryColorFull.svg';

export default function Values() {

  const {isLG} = useContext(AppContext);
  const { valuesData } = useContext(AppContext);
  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;

  // const animateLogoHeart = useAnimation();

  return (
    <section className="values full-vh" id="values">
      {/* <Icon icon={SShape} class={'s-shape-up'} /> */}
      {valuesData.map((value) => (
        <Value
          key={value.id}
          icon={themeColor === 'light' ? value.icon.light : value.icon.dark}
          text={value.title}
          x={value.coordonates.x}
          y={value.coordonates.y}
          animation={value.animation}
          id={value.title}
          second={value.rotate.second}
          third={value.rotate.third}
        />
      ))}
      <motion.div className='logo-value' animate={{ scale: [null, 1.2, 1], transition:{duration: 10, repeat: Infinity}}}>
        <Logo
          logo={
            themeColor === 'light'
              ? logoPrimaryColorFull
              : logoSecondaryColorFull
          }
          width={'auto'}
          height={isLG ? '64px' : '40px'}
          class={'logo-value'}
        />
      </motion.div>
    </section>
  );
}
