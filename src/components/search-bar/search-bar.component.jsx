import { useState } from "react";

import InfoPopup from "../info-popup/info-popup.component";

import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as AutoLight } from '../../assets/images/auto-light.svg';

import './search-bar.style.scss';

const SearchBar = () => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  }

  const onMouseLeave = () => {
    setHovered(false);
  }

  return (
    <div className="light-search">
      <AutoLight
        className="icon-24 light"
        fill={
          hovered
            ? "grey"
            : "white"
        }
        onMouseOver={() => { onMouseEnter() }}
        onMouseOut={() => { onMouseLeave() }}
      />
      <div className="info-popup-wrapper">
        <p className="info-popup-text">Switch to light mode</p>
      </div>

      <div className="input-wrapper">
        <Search
          fill="white"
          className="search"
        />
        <input
          className="input"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SearchBar;