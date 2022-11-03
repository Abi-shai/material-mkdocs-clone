import MaterialIcon from '../../assets/images/mat-icon.png';

import './logoside.style.scss';

const LogoSide = () => {
  return (
    <div>
      <div className="ham-menu">
        <a className="maticon-wrapper">
          <img className="icon-24 maticon icon-image-1" src={MaterialIcon} alt="menu" />
          <div>
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