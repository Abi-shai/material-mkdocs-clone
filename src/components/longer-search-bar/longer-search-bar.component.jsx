import { useState } from "react";

import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as AutoLight } from '../../assets/auto-light.svg';

import './longer-search-bar.style.scss';

const LongerSearchbar = () => {
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

      <div className="input-wrapper">
        <Search
          fill="white"
          className="search" />
        <input
          className="input"
          placeholder="Search"
          // Todo
          onInput={() => { console.log('writting') }}
        />
      </div>
    </div>
  )
}

export default LongerSearchbar;