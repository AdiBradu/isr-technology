import React, {useContext} from 'react';
import './homePage.component.scss';
import Values from '../../components/values/values.component.jsx';
import Portfolio from '../../components/portfolio/portfolio.component.jsx';
import Partners from '../../components/partners/partners.component.jsx';
import Contact from '../../components/contact/contact.component.jsx';
import Icon from '../../components/icon/icon.component.jsx';
import PhoneAccent from '../../assets/icons/iconPhoneAccent.svg';
import { AppContext } from '../../AppContext';

export default function HomePage(props) {

  const {isLG} = useContext(AppContext);

  return (
    <main className="home-page">
      <Values themeColor={props.themeColor} />
      <Portfolio themeColor={props.themeColor} />
      <Partners />
      <Contact />
      <div className="call navlinks">
        <a href="tel:+13053289110">
          <p
            className="navlinks"
            style={isLG ? { display: 'flex' } : { display: 'none' }}
          >
            305-328-9110
          </p>
          <Icon icon={PhoneAccent} class={'phone'} />
        </a>
      </div>
    </main>
  );
}
