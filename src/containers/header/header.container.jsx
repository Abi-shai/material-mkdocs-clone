import SearchBar from "../../components/search-bar/search-bar.component";
import LinksSection from "../../components/links-section/links-section.component";
import LogoSide from "../../components/logoside/logoside.component";

import './header.style.scss';

const Header = () => {
  return (
    <header className="headeer-wrapper">
      <nav className="header">
        <div className="filler"></div>
        <LogoSide />
        <SearchBar />
        <LinksSection />
      </nav>
    </header >
  )
}

export default Header;