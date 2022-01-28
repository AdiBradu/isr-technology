import React from 'react';
import './sectionIntro.component.scss';
import Sectionh1 from '../../components/sectionH1/sectionh1.component';
import Paragraph from '../../components/paragraph/paragraph.component.jsx';

export default function SectionIntro(props) {
  return (
    <div className="section-intro">
      <Sectionh1 h1={props.h1} />
      <Paragraph paragraph={props.paragraph} />
    </div>
  );
}
