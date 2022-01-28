import React from 'react';
import './copyright.component.scss';
import Logo from '../../components/logo/logo.component.jsx';
//ISR Logo
import Isr from '../../assets/logos/logoSecondaryColorFull.svg';

export default function Copyright() {
  return (
    <div className="copyright">
      <Logo logo={Isr} />
      <p className="small">
        2021 copyright ISR TEchnology. <br />
        all rights reserved.
      </p>
    </div>
  );
}
