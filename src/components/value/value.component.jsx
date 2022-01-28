import React, { useEffect } from 'react';
import './value.component.scss';
import Icon from '../../components/icon/icon.component.jsx';
import { motion, useAnimation, useTransform } from 'framer-motion';

export default function Value({
  animation,
  x,
  y,
  second,
  third,
  id,
  icon,
  text,
}) {
  const xCoord = x;
  const yCoord = y;

  return (
    <div
      className="value"
      style={{ transform: `translate(-50%, -50%) rotate(${xCoord})` }}
    >
      <motion.div
        className="value-group"
        style={{ transform: `translate(0px, 0px) rotate(${yCoord})` }}
        id={id}
        animate={{
          x: [null, 50, 0],
          rotate:[yCoord, null],
          scale: [null, 1.2, 1],
          transition: {
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        <Icon icon={icon} class={'value-icon'} />
        <p>{text}</p>
      </motion.div>
    </div>
  );
}
