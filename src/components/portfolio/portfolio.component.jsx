import React, { useContext } from 'react';
import './portfolio.component.scss';
import SectionIntro from '../../components/sectionIntro/sectionIntro.component.jsx';
import Card from '../../components/card/card.component.jsx';
import Icon from '../../components/icon/icon.component.jsx';
import SShape from '../../assets/icons/sShape.svg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';

export default function Portfolio(props) {
  const { portfolioData } = useContext(AppContext);
  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;
  const {portofolioPageIdObj} = useContext(AppContext); 
  const [portofolioPageId, setPortofolioPageId] = portofolioPageIdObj;
  const { portfolioPageTitleObj } = useContext(AppContext);
  const [portfolioPageTitle, setPortfolioPageTitle] = portfolioPageTitleObj;
  const { portfolioPageIconObj } = useContext(AppContext);
  const [portfolioPageIcon, setPortfolioPageIcon] = portfolioPageIconObj;
  const { portfolioPageParagraphObj } = useContext(AppContext);
  const [portfolioPageParagraph, setPortfolioPageParagraph] = portfolioPageParagraphObj;
  const {changePortofolioPageId} = useContext(AppContext)

  return (
    <section className="portfolio" id="services">
      <Icon icon={SShape} class={'s-shape-up'} />
      <SectionIntro
        h1={'our services'}
        paragraph={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.'
        }
      />

      {portfolioData.map((card) => (
        <Link
          to={{
            pathname: `${card.link}`,
            state: { id: `${card.id}`}
          }}
          onClick={() => {
            setPortfolioPageTitle(card.title);
            setPortfolioPageIcon(card.icon);
            setPortfolioPageParagraph(card.paragraph);
            changePortofolioPageId(card.id)
          }}
          className="card-link"
        >
          <Card
            key={card.id}
            id={card.id}
            icon={card.icon}
            title={card.title}
            paragraph={card.paragraph}
            themeColor={themeColor}
          />
        </Link>
      ))}
    </section>
  );
}
