import { useContext, useEffect } from "react";
import MaterialIcon from '../../assets/images/mat-icon.png';
import { AppContext } from "../../context";

import './logoside.style.scss';

const LogoSide = () => {
  const { setMenuButtonCliked, isMenuButtonClicked } = useContext(AppContext);

  const settingMenuButtonCliked = () => {
    setMenuButtonCliked(true);
    console.log(isMenuButtonClicked)
  }

  const settingMenuButtonNotCliked = () => {
    setMenuButtonCliked(false);
    console.log(isMenuButtonClicked)
  }

  return (
    <div className="ham-ham-menu">
      <div className="ham-menu">
        <a
          className="maticon-wrapper"
          href="/"
        >
          <img
            className="icon-24 maticon icon-image-1"
            src={MaterialIcon}
            alt="MkDocs Material Icon"
          />
          <div
            onClick={
              isMenuButtonClicked === false
                ? () => { settingMenuButtonCliked() }
                : () => { settingMenuButtonNotCliked() }
            }
          >
            <svg className="icon-24 maticon icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"></path></svg>
          </div>
        </a>
        <p className="material-text">Material for MkDocs</p>
        <div className="info-popup-wrapper">
          <p className="info-popup-text">Material for MkDocs</p>
        </div>
      </div>
    </div>
  )
}

export default LogoSide;