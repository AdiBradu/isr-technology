import React from 'react';
import './icon.component.scss';

export default function Icon(props) {
  return (
    <div className="icon" className={props.class}>
      <img src={props.icon} alt="icon" />
    </div>
  );
}
