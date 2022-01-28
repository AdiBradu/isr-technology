import React, { useContext } from 'react';
import './cards.component.scss';
import Card from '../../components/card/card.component.jsx';

import { AppContext } from '../../AppContext';

import iconManagedIT from '../../assets/icons/iconManagedIT.svg';
import iconSecurity from '../../assets/icons/iconSecurity.svg';
import iconAudioVisual from '../../assets/icons/iconAudioVisual.svg';
import iconWirelessSystems from '../../assets/icons/iconWirelessSystems.svg';
import iconCloudServices from '../../assets/icons/iconCloudServices.svg';
import iconCybersecurity from '../../assets/icons/iconCybersecurity.svg';
import iconVOIP from '../../assets/icons/iconVOIP.svg';
import iconNetworking from '../../assets/icons/iconNetworking.svg';

export default function Cards(props) {
  const { portfolioData } = useContext(AppContext);

  return (
    <div className="cards">
      {portfolioData.map((card) => {
        <Card icon={iconManagedIT} service={'testing'} />;
      })}
      {/* <Card
        icon={iconManagedIT}
        service={'Managed IT'}
        themeColor={props.themeColor}
      />
      <Card
        icon={iconSecurity}
        service={'Security'}
        themeColor={props.themeColor}
      />
      <Card
        icon={iconAudioVisual}
        service={'Audio/Visual'}
        themeColor={props.themeColor}
      />
      <Card
        icon={iconWirelessSystems}
        service={'Wireless Systems'}
        themeColor={props.themeColor}
      />
      <Card
        icon={iconCloudServices}
        service={'Cloud Services'}
        themeColor={props.themeColor}
      />
      <Card
        icon={iconCybersecurity}
        service={'Cybersecurity'}
        themeColor={props.themeColor}
      />
      <Card icon={iconVOIP} service={'VOIP'} themeColor={props.themeColor} />
      <Card
        icon={iconNetworking}
        service={'Networking'}
        themeColor={props.themeColor}
      /> */}
    </div>
  );
}
