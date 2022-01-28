import React from 'react';
import './slider.component.scss';
import Slide from '../../components/slide/slide.component.jsx';

import Apple from '../../assets/icons/partners/iconPartnerApple.svg';
import Cisco from '../../assets/icons/partners/iconPartnerCisco.svg';
import Meraki from '../../assets/icons/partners/iconPartnerMeraki.svg';
import Netgear from '../../assets/icons/partners/iconPartnerNetgear.svg';
import TPLink from '../../assets/icons/partners/iconPartnerTPLink.svg';
import Microsoft from '../../assets/icons/partners/iconPartnerMicrosoft.svg';
import Ubiquity from '../../assets/icons/partners/iconPartnerUbiquity.svg';
import Hp from '../../assets/icons/partners/iconPartnerHP.svg';
import Epson from '../../assets/icons/partners/iconPartnerEpson.svg';
import Aws from '../../assets/icons/partners/iconPartnerAWS.svg';

export default function Slider() {
  return (
    <div className="slider">
      <Slide icon={Apple} />
      <Slide icon={Cisco} />
      <Slide icon={Meraki} />
      <Slide icon={Netgear} />
      <Slide icon={TPLink} />
      <Slide icon={Microsoft} />
      <Slide icon={Ubiquity} />
      <Slide icon={Hp} />
      <Slide icon={Epson} />
      <Slide icon={Aws} />
    </div>
  );
}
