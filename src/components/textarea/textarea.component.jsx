import React from 'react';
import './textarea.component.scss';

export default function Textarea(props) {
  return (
    <div className="textarea">
      <label>
        <p className="caption">{props.label}</p>
      </label>
      <textarea 
        placeholder={props.placeholder}
        onChange={props.handleChange}
        name={props.name}
        value={props.value}
      ></textarea>
    </div>
  );
}
