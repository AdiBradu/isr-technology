import React from 'react';
import './partners.component.scss';
import SectionIntro from '../../components/sectionIntro/sectionIntro.component.jsx';
import Slider from '../../components/slider/slider.component.jsx';

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <SectionIntro
        h1={[`partners &`, <br />, `certifications`]}
        paragraph={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.'
        }
      />
      <div className="slider-socket">
        <div className="prev"></div>
        <div className="next"></div>
        <Slider />
      </div>
    </section>
  );
}
