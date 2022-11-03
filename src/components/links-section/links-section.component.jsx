import { useState } from "react";

import { ReactComponent as Git } from '../../assets/images/git.svg';
import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Badge } from '../../assets/images/badge.svg';
import { ReactComponent as GitRepo } from '../../assets/images/git-repo.svg';

import './links-section.style.scss';

const LinksSection = () => {
  const [opacity, setOpacity] = useState(false);
  const [linksHovered, setLinksHovered] = useState(false);

  // Opacity state change
  const onOpacityMouseEnter = () => {
    setOpacity(true);
  }
  const onOpacityMouseLeave = () => {
    setOpacity(false);
  }

  // Links hovered state change
  const onLinksHoveredMouseEnter = () => {
    setLinksHovered(true);
  }
  const onLinksHoveredMouseLeave = () => {
    setLinksHovered(true);
  }

  return (
    <div className="links-wrapper">
      <div
        className="links-wrapper-2"
      // onMouseEnter={() => { onLinksHoveredMouseEnter() }}
      // onMouseOut={() => { onLinksHoveredMouseLeave() }}
      >
        <Git className="git" fill="white" />

        <div className="links">
          <p> squidfunk /mkdocs-material</p>

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

        </div>
      </div>

      <div className="info-popup-wrapper">
        <p className="info-popup-text">Go to repository</p>
      </div>

    </div>
  )
}

export default LinksSection;
