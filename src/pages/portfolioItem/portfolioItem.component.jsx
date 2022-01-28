import React, { useContext } from 'react';
import './portfolioItem.component.scss';
import LayoutPage from '../../components/layoutPage/layoutPage.component.jsx';
import PortfolioImage from '../../assets/images/dummypic.jpg';
import SectionH1 from '../../components/sectionH1/sectionh1.component.jsx';
import Paragraph from '../../components/paragraph/paragraph.component.jsx';
import Icon from '../../components/icon/icon.component.jsx';
import { AppContext } from '../../AppContext';
import portfolioPageData from '../../data/portfolioPageData.json';
import {useLocation} from 'react-router-dom'

export default function PortfolioItem(props) {

  const { portofolioPageIdObj } = useContext(AppContext);
  const [portofolioPageId, setPortofolioPageId] = portofolioPageIdObj;
  const { portfolioPageTitleObj } = useContext(AppContext);
  const [portfolioPageTitle, setPortfolioPageTitle] = portfolioPageTitleObj;
  const { portfolioPageIconObj } = useContext(AppContext);
  const [portfolioPageIcon, setPortfolioPageIcon] = portfolioPageIconObj;
  const { portfolioPageParagraphObj } = useContext(AppContext);
  const [portfolioPageParagraph, setPortfolioPageParagraph] = portfolioPageParagraphObj;

  let { slug } = useLocation();
  console.log(slug)
  return (
    <LayoutPage>
      <div className="image-socket">
        <div className="overlay"></div>
        <img src={PortfolioImage} alt="portfolio" className="portfolio-image" />
      </div>
      <div className="icon-set container">
        <Icon icon={portfolioPageIcon} class={'portfolio-item-icon'} />
        <SectionH1 h1={portfolioPageTitle} />
      </div>
      <div className="text-content container">
        <Paragraph paragraph={portfolioPageParagraph} />
      </div>
    </LayoutPage>
  );
}
