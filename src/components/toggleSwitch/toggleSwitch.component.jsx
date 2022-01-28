import React, { useContext } from 'react';
import './toggleSwitch.component.scss';

import { AppContext } from '../../AppContext';

export default function ToggleSwitch(props) {
  const { themeColorObj } = useContext(AppContext);
  const [themeColor, setThemeColor] = themeColorObj;
  const { toggleSwitcherObj } = useContext(AppContext);
  const [isToggled, setIsToggled] = toggleSwitcherObj;
  const {mobileMenuOpenObj} = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = mobileMenuOpenObj;
  const {isLG}= useContext(AppContext);

  const onToggle = () => {
    setIsToggled(!isToggled);
    !isLG && props.closeMenu();
    setMobileMenuOpen(false);
  };

  return (
    <div className="switcher">
      <div className="theme-mode">
        {themeColor === 'light' ? (
          <p className="navlinks">Go Dark</p>
        ) : (
          <p className="navlinks">Go Light</p>
        )}
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </div>
  );
}
