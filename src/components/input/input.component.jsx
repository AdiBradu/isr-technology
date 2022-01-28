import React from 'react';
import './input.component.scss';

export default function Input(props) {
  return (
    <div className="input">
      <label>
        <p className="caption">{props.label}</p>
      </label>
      <input 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={props.handleChange}
        value={props.value}
        name={props.name}
      />
    </div>
  );
}
