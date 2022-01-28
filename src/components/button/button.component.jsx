import React from 'react';
import './button.component.scss';

export default function Button(props) {
  return (
    <button className="form-send-button" type={props.type}>
      <p className="btn">{props.text ? props.text : props.status}</p>
    </button>
  );
}
