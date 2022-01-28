import React from 'react';
import './card.component.scss';
import variables from '../../styles/_variables.module.scss';
import { useLocation } from 'react-router-dom'

export default function Card(props) {
  // const location = useLocation();
  // const paragraph = location.state?.paragraph;
  // console.log(paragraph)
  console.log(props.id)
  return (
    <div
      className="card"
      style={
        props.themeColor === 'light'
          ? { backgroundColor: variables.cardBgLight }
          : { backgroundColor: variables.cardBgDark }
      }
      // key={props.key}
    >
      <div className="image-socket">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="paragraph-socket">
        <p>{props.title}</p>
      </div>
    </div>
  );
}
