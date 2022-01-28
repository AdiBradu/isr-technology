import React from 'react';
import './slide.component.scss';

export default function Slide(props) {
  return (
    <div className="slide">
      <img src={props.icon} alt="slide" />
    </div>
  );
}
