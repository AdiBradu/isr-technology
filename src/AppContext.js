import React, { useState, createContext } from 'react';
import portfolioData from './data/portfolioPageData.json';
import valuesData from './data/values.json';
import { useMediaQuery } from 'react-responsive';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const isXS = useMediaQuery({ query: `(min-width: 0px)` })
  const isSM = useMediaQuery({ query: `(min-width: 576px)` });
  const isMD = useMediaQuery({ query: `(min-width: 768px)` });
  const isLG = useMediaQuery({ query: `(min-width: 992px)` });
  const isXL = useMediaQuery({ query: `(min-width: 1200px)` });
  const isXXL = useMediaQuery({ query: `(min-width: 1400px)` });

  const [themeColor, setThemeColor] = useState('light');
  const [isToggled, setIsToggled] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const [portofolioPageId, setPortofolioPageId] = useState(null);
  const [portfolioPageTitle, setPortfolioPageTitle] = useState('');
  const [portfolioPageIcon, setPortfolioPageIcon] = useState('');
  const [portfolioPageParagraph, setPortfolioPageParagraph] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changePortofolioPageId = (event) => {
    setPortofolioPageId(event)
  }

  return (
    <AppContext.Provider
      value={{
        portofolioPageIdObj: [portofolioPageId, setPortofolioPageId],
        changePortofolioPageId,
        themeColorObj: [themeColor, setThemeColor],
        toggleSwitcherObj: [isToggled, setIsToggled],
        isMenuOpenObj: [isMenuOpen, setIsMenuOpen],
        mobileMenuOpenObj: [mobileMenuOpen, setMobileMenuOpen],
        portfolioData,
        valuesData,
        isXS,
        isSM,
        isMD,
        isLG,
        isXL,
        isXXL,
        portfolioPageTitleObj: [portfolioPageTitle, setPortfolioPageTitle],
        portfolioPageIconObj: [portfolioPageIcon, setPortfolioPageIcon],
        portfolioPageParagraphObj: [portfolioPageParagraph, setPortfolioPageParagraph],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
