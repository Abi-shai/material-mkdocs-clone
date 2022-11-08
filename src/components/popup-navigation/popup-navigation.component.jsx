import { useContext } from "react";

import { AppContext } from "../../context";
import LinksSection from "../links-section/links-section.component";

import { ReactComponent as Git } from '../../assets/images/git.svg';
import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Badge } from '../../assets/images/badge.svg';
import { ReactComponent as GitRepo } from '../../assets/images/git-repo.svg';

import MaterialIcon from '../../assets/images/mat-icon.png';

import './popup-navigation.style.scss';
import App from "../../App";

const PopupNavigation = () => {
  const { isMenuButtonClicked } = useContext(AppContext);

  return (
    <nav
      className="ham-menu__nav"
      style={
        isMenuButtonClicked === true
          ? { transform: 'translateX(0px)' }
          : { transform: 'translateX(-250px)' }
      }
    >
      <div className="ham-menu__nav-2">
        <label className="ham-menu__nav__title">
          <div className="ham-menu__nav__logo">
            <div className="ham-menu__nav__logo__element">
              <img
                className="mt-icon__overlay"
                src={MaterialIcon}
                alt="menu"
              />
              <p>Material for MkDocs</p>
            </div>
            <div className="links-wrapper-4">
              <div
                className="links-wrapper-3"
              >
                <Git className="git" fill="white" />

                <a
                  className="links"
                  href="https://github.com/squidfunk/mkdocs-material"
                >
                  <span> squidfunk /mkdocs-material</span>

                  <div className="links-icons-wrapper">
                    <div className="links-icons">
                      <div className="icon-stats">
                        <Badge
                          className="links-icon"
                          fill="white"
                        />
                        <span>8.5.7</span>
                      </div>
                      <div className="icon-stats">
                        <Star
                          className="links-icon"
                          fill="white"
                        />
                        <span>11.5k</span>
                      </div>
                      <div className="icon-stats">
                        <GitRepo
                          className="links-icon"
                          fill="white"
                        />
                        <span>2.6k</span>
                      </div>
                    </div>

                  </div>

                </a>
              </div>
            </div>
          </div>
        </label>
        <ul
          className="nav-ul"
        >
          <li className="nav-ul__link nav-ul__li">
            <span>Home</span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Getting started
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Setup
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Reference
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Insiders
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Blog
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
          <li className="nav-ul__li linkss">
            <span>
              Getting started
            </span>
            <span className="nav-li-arrow">
              &#x203A;
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default PopupNavigation;