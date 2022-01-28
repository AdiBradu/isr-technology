import React from 'react';
import './logo.component.scss';
import {motion} from 'framer-motion';

export default function Logo(props) {
  return (
    <div className={`logo ${props.class}`}>
      <motion.img
        src={props.logo}
        alt="logo"
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
}
