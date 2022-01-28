import React, { useContext } from 'react';
import './contact.component.scss';
import { AppContext } from '../../AppContext';
import SectionIntro from '../../components/sectionIntro/sectionIntro.component.jsx';
import Form from '../../components/form/form.component.jsx';
import SectionH2 from '../../components/sectionH2/sectionh2.component.jsx';
import SectionH3 from '../../components/sectionH3/sectionh3.component.jsx';
import Icon from '../../components/icon/icon.component.jsx';
import SocialMediaIcon from '../../components/socialMediaIcon/socialMediaIcon.component.jsx';
import Logo from '../../components/logo/logo.component.jsx';
import Copyright from '../../components/copyright/copyright.component.jsx';
//Navigation icons
import GoogleMapsDark from '../../assets/icons/navigation/googleMapsIconDark.svg';
import WazeDark from '../../assets/icons/navigation/wazeIconDark.svg';
import GoogleMapsLight from '../../assets/icons/navigation/googleMapsIconLight.svg';
import WazeLight from '../../assets/icons/navigation/wazeIconLight.svg';
//Social media icons
import Linkedin from '../../assets/icons/socialmedia/linkedinIcon.svg';
import Facebook from '../../assets/icons/socialmedia/facebookIcon.svg';
import Instaram from '../../assets/icons/socialmedia/instagramIcon.svg';
import Youtube from '../../assets/icons/socialmedia/youtubeIcon.svg';
//IMNOt logo
import ImnotLight from '../../assets/logos/imnotLogoLight.svg';
import ImnotDark from '../../assets/logos/imnotLogoDark.svg';
// import Icon from '../../components/icon/icon.component.jsx';
import SShape from '../../assets/icons/sShape.svg';

export default function Contact() {
  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionIntro
          h1={[`contact,`, <br />, `navigation &`, <br />, `social media`]}
          paragraph={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.'
          }
        />
        <Form />
        <div className="contact-info">
          <div className="location-navigation">
            <SectionH2 h2={'Location & Navigation'} />
            <div className="address-navigation">
              <div className="address">
                <SectionH3 h3={'Address'} />
                <p>
                  701 Brickell Avenue
                  <br />
                  Suite 1550
                  <br />
                  Miami, FL 33131
                </p>
                <p>
                  +1 305 328 9110
                  <br />
                  contact@isr-technology.com
                </p>
              </div>
              <div className="navigation">
                <SectionH3 h3={'Navigation'} />
                <div className="navigation-icons">
                  {themeColor === 'light' ? (
                    <a href="https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727" target="_blank" rel="noopener noreferrer">
                      <Icon icon={GoogleMapsLight} />
                    </a>
                  ) : (
                    <a href="https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727" target="_blank" rel="noopener noreferrer">
                      <Icon icon={GoogleMapsDark} />
                    </a>
                  )}
                  {themeColor === 'light' ? (
                    <a href="https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
                      <Icon icon={WazeLight} />
                    </a>
                  ) : (
                    <a href="https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
                      <Icon icon={WazeDark} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="social-media">
            <SectionH2 h2={'Follow Us'} />
            <div className="social-media-icons">
              <a href="https://www.linkedin.com/company/isr-technology" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={Linkedin} />
              </a>
              <a href="https://www.facebook.com/Isr-Technology-104523352137948" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={Facebook} />
              </a>
              <a href="https://www.instagram.com/isr_technology/" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={Instaram} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={Youtube} />
              </a>
            </div>
          </div>

          <div className="footer">
            <div className="design-and-development">
              <p className="caption">design & development</p>
              <a
                href="http://imnot.agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                {themeColor === 'light' ? (
                  <Logo logo={ImnotLight} class={'imnot'} />
                ) : (
                  <Logo logo={ImnotDark} class={'imnot'} />
                )}
              </a>
            </div>
            <Copyright />
          </div>
        </div>
      </div>
      <Icon icon={SShape} class={'s-shape-down'} />
    </section>
  );
}
