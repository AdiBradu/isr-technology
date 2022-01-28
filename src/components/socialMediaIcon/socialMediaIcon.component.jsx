import React from 'react';
import './socialMediaIcon.component.scss';

export default function SocialMediaIcon(props) {
  return (
    <address>
      <img src={props.icon} alt="social-media-icon" className={props.class} />
    </address>
  );
}
