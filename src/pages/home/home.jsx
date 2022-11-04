import { useContext } from "react";

import { AppContext } from "../../context.jsx";


import Header from '../../containers/header/header.container.jsx';
import CenteredContent from "../../containers/centered-content/centered-content.container.jsx";
import PopupNavigation from "../../components/popup-navigation/popup-navigation.component";

import BuiltInSearch from '../../assets/images/built-in-search.png';
import IconsEmojis from '../../assets/images/icons-emojis.png';
import Wall from '../../assets/images/wall.png';
import CodeAnnotations from '../../assets/images/code-annotations.png';
import SocialsCard from '../../assets/images/social-cards.png';

import JohnMaeda from "../../assets/images/john-maeda.jpg";
import SebastianRamirez from "../../assets/images/sebastian-ramirez.jpg";
import MichaelFeng from "../../assets/images/michael-feng.jpg";

import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';


import './home.scss';

const Home = () => {
  const { isMenuButtonClicked, setMenuButtonCliked } = useContext(AppContext);


  const settingUnclicked = () => {
    setMenuButtonCliked(false);
  }

  return (
    <div
      className="home"
      style={
        isMenuButtonClicked === true
          ? { height: "100vh" }
          : { height: "100%" }
      }
    >
      <div className="viewport__100">
        <div className="hd-wrapper">
          <Header />
        </div>
        {/* <MainImage className="img__main" /> */}
        <CenteredContent />
      </div>
      <PopupNavigation />
      <div className="main-content-wrapper">
        <div
          className="nav-overlay"
          style={
            isMenuButtonClicked === true
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          onClick={
            isMenuButtonClicked === true
              ? () => { settingUnclicked() }
              : () => { settingUnclicked() }
          }
        >
        </div>
      </div>
      <div className="pre-content">
        <header>
          <h1 className="everything-you-would-expect">
            Everything you would expect
            <a href="#everything-you-would-expect" className="headerlink" title="Permanent link">
              ¶
            </a>
          </h1>
        </header>
        <ul className="mdx-expect__list">
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35 1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35-1.92-2.35H4.89v6.38h1.92M19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28L19.69 12Z"></path>
                </svg>
              </div>
              <h2>It's just Markdown</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Focus on the content of your documentation and create a professional static site in minutes. No need to know HTML, CSS or JavaScript - let Material for MkDocs do the heavy lifting for you.
              </p>
            </div>
          </li>
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6m10 6H9v1.78c-.61.55-1 1.33-1 2.22 0 .89.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12m-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4v8Z"></path></svg>
              </div>
              <h2>Works on all devices</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Serve your documentation with confidence – Material for MkDocs automatically adapts to perfectly fit the available screen estate, no matter the type or size of the viewing device. Desktop. Tablet. Mobile. All great. </p>
            </div>
          </li>
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1l6-12m1 1-3.5 7H18V9M5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5H6Z"></path></svg>
              </div>
              <h2>Made to measure</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Make it yours - change the colors, fonts, language, icons, logo, and more with a few lines of configuration. Material for MkDocs can be easily extended and provides many options to alter appearance and behavior. </p>
            </div>
          </li>
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 10a1 1 0 0 1-1-1 1 1 0 0 1 1-1h8a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4m15 2a1 1 0 0 0 1-1 1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14m-1 6H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"></path></svg>
              </div>
              <h2>Fast and lightweight</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Don't let your users wait – get incredible value with a small footprint by using one of the fastest themes available with excellent performance, yielding optimal search engine rankings and happy users that return. </p>
            </div>
          </li>
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.4 11.2-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5c.6-.9.9-1.9.9-3 0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4M18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m-5.5 16.1c-.9.6-1.9.9-3 .9C6.5 22.5 4 20 4 17c0-1.1.3-2.1.9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5Z"></path></svg>
              </div>
              <h2>Built for everyone</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Make accessibility a priority – users can navigate your documentation with touch devices, keyboards, and screen readers. Semantic markup ensures that your documentation works for everyone. </p>
            </div>
          </li>
          <li className="mdx-expect__item md-typeset">
            <div className="mdx-expect__item-2">
              <div className="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path> <path fillRule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path> </svg>
              </div>
              <h2>Open Source</h2>
            </div>
            <div className="mdx-expect__description">
              <p> Trust 10,000+ users – choose a mature and actively maintained solution built with state-of-the-art Open Source technologies. Keep ownership of your content without fear of vendor lock-in. Licensed under MIT. </p>
            </div>
          </li>
        </ul>
        <div className="expertise-overview">
        </div>
      </div>
      <div className="md-content__inner">
        <div className="md-content__inner-2">
          <h1 id="more-than-just-a-static-site">More than just a static site <a href="#more-than-just-a-static-site" className="headerlink" title="Permanent link"> ¶ </a> </h1>
          <div className="figures-wrapper">
            <figure className="mdx-spotlight__feature">
              <a href="setup/setting-up-site-search/" tabIndex="-1" title="Built-in search"> <img src={BuiltInSearch} alt="Built-in search" loading="lazy" width="500" height="327" />
              </a>
              <figcaption className="md-typeset">
                <h2 className="built-in-search-h2">Built-in search</h2>
                <div className="two-ps">
                  <p> Material for MkDocs makes your documentation <strong>instantly searchable</strong> with zero effort: say goodbye to costly third-party crawler-based solutions that can take hours to update. Ship your documentation with a <strong>highly customizable </strong> and <strong>blazing fast search</strong> running entirely <strong>in the user's browser</strong> at no extra cost. </p>
                  <p> Even better: search inside code blocks, exclude specific sections or entire pages, boost important pages in the results and build searchable documentation that <strong>works offline</strong>. </p>
                </div>
                <p className="docs-learn-more">
                  <a className="docs-learn-more-icon" href="setup/setting-up-site-search/" aria-label="Built-in search"> <span className="twemoji"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.22 19.03a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H3.75a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"></path></svg> </span> Learn more </a>
                </p>
              </figcaption>
            </figure>
            <figure className="mdx-spotlight__feature_2">
              <a href="setup/setting-up-site-search/" tabIndex="-1" title="Built-in search"> <img src={CodeAnnotations} alt="Built-in search" loading="lazy" width="500" height="327" />
              </a>
              <figcaption className="md-typeset">
                <h2 className="built-in-search-h2">Code annotations</h2>
                <div className="two-ps">
                  <p> Some examples need more explanation than others, which is why Material for MkDocs offers a <strong>unique and elegant</strong> way to add <strong>rich text</strong> almost <strong>anywhere in a code block</strong>. </p>
                  <p> Code annotations can host formatted <strong>text</strong>, <strong>images</strong>, <strong>diagrams</strong>, <strong>code blocks</strong>, call-outs, content tabs, even interactive elements – basically everything that can be expressed in Markdown or HTML. Of course, code annotations <strong>work beautifully on mobile</strong> and other touch devices <strong> and can be printed</strong>. </p>
                </div>
                <p className="docs-learn-more">
                  <a className="docs-learn-more-icon" href="setup/setting-up-site-search/" aria-label="Built-in search"> <span className="twemoji"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.22 19.03a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H3.75a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"></path></svg> </span> Learn more </a>
                </p>
              </figcaption>
            </figure>
            <figure className="mdx-spotlight__feature">
              <a href="setup/setting-up-site-search/" tabIndex="-1" title="Built-in search"> <img src={SocialsCard} alt="Built-in search" loading="lazy" width="500" height="327" />
              </a>
              <figcaption className="md-typeset">
                <h2 className="built-in-search-h2">Social cards</h2>
                <div className="two-ps">
                  <p> <strong>Make an impact on social media</strong> and <strong>increase engagement</strong> when sharing links to your documentation by leveraging the built-in social plugin. Material for MkDocs makes it effortless to generate a <strong>beautiful preview image</strong> for each page, which will drive more interested users to your Open Source or commercial project. </p>
                  <p> While the social plugin uses what's already there, i.e. your project's name and logo, as well as each page's title and description, it's easy to <strong>customize preview images</strong>. </p>
                </div>
                <p className="docs-learn-more">
                  <a className="docs-learn-more-icon" href="setup/setting-up-site-search/" aria-label="Built-in search"> <span className="twemoji"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.22 19.03a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H3.75a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"></path></svg> </span> Learn more </a>
                </p>
              </figcaption>
            </figure>
            <figure className="mdx-spotlight__feature_2">
              <a href="setup/setting-up-site-search/" tabIndex="-1" title="Built-in search"> <img src={IconsEmojis} alt="Built-in search" loading="lazy" width="500" height="327" />
              </a>
              <figcaption className="md-typeset">
                <h2 className="built-in-search-h2"> 10,000+ icons and emojis <img className="twemoji t2 " src="https://twemoji.maxcdn.com/v/latest/svg/1f389.svg" alt="Tada"></img></h2>
                <div className="two-ps">
                  <p> Supercharge your technical writing by making better use of the processing power of the visual cortex: Material for MkDocs ships <strong>more than 10,000 icons and emojis</strong>, which can be used <strong>in Markdown and HTML</strong> with simple shortcodes and an easy-to-remember syntax. Add color to icons and animate them. <strong>Make it pop.</strong> </p>
                  <p> Use our dedicated <a href="reference/icons-emojis/#search">icon search</a> to quickly find the perfect icon for almost every use case and <strong>add custom icon sets</strong> with minimal configuration. </p>
                </div>
                <p className="docs-learn-more">
                  <a className="docs-learn-more-icon" href="setup/setting-up-site-search/" aria-label="Built-in search"> <span className="twemoji"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.22 19.03a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H3.75a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"></path></svg> </span> Learn more </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <section className="trusted-wrapper">
        <img src={Wall} alt="Trusted in the industry" />
        <div className="trusted-wrapper-2">
          <h2 className="md-typeset-2">Trusted in the industry</h2>
          <div className="mdx-trust">
            <h3>
              Industry leaders, as well as many successful Open Source projects, rely on Material for MkDocs to create professional and beautiful documentation –
              <strong> no frontend experience required</strong>. Choose a mature and actively maintained solution and <strong>start writing in minutes</strong>.</h3>
          </div>
          <button className="catch-phrase-section-button-2">Get started</button>
        </div>
      </section>
      <div className="md-content__inner">
        <header className="md-typeset">
          <h1 id="what-our-users-say"> What our users say <a href="#what-our-users-say" className="headerlink" title="Permanent link"> ¶ </a> </h1>
        </header>
        <div className="mdx-users">
          <figure className="mdx-users__testimonial">
            <img src={JohnMaeda} alt="John Maeda" loading="lazy" width="200" height="200" />
            <figcaption className="md-typeset">
              <h2>John Maeda</h2>
              <h3> Author / <a href="https://howtospeakmachine.com/">How To Speak Machine</a> </h3>
              <cite> One of the things people like the most about FastAPI, Typer, and SQLModel, is the documentation. I have put a lot of effort into making it easy to study and fast to understand. And a key component of that is the richness of ways I can explain and show things with Material for MkDocs. It's so easy to structure and explain things using it with all its features! It's simple to use, immersive for visitors, and beautiful by default. </cite>
            </figcaption>
          </figure>
          <figure className="mdx-users__testimonial">
            <img src={SebastianRamirez} alt="John Maeda" loading="lazy" width="200" height="200" />
            <figcaption className="md-typeset">
              <h2>Sebastián Ramírez</h2><h3> Creator of <a href="https://fastapi.tiangolo.com/">FastAPI</a>, <a href="https://typer.tiangolo.com/">Typer</a> &amp; <a href="https://sqlmodel.tiangolo.com/">SQLModel</a> </h3>
              <cite> The unwritten rule of the digital transformation handbook is that you'll never have the resources to design experiences like Apple. But you can always close most usability gaps with an awesome documentation experience. Expressed similarly in <a href="https://mitpress.mit.edu/books/laws-simplicity">The Laws of Simplicity</a>, "Learning makes things simpler". Material for MkDocs is the magical, extensible, Open Source tool that makes sharing knowledge both easier and beautiful for both the writers and learners. </cite>
            </figcaption>
          </figure>
          <figure className="mdx-users__testimonial">
            <img src={MichaelFeng} alt="John Maeda" loading="lazy" width="200" height="200" />
            <figcaption className="md-typeset">
              <h2>Michael Feng</h2><h3> Co-Founder &amp; CEO of <a href="https://hummingbot.com">Hummingbot</a> </h3><cite> Hummingbot Foundation depends on Material for MkDocs for our official website and documentation at <a href="https://hummingbot.org">hummingbot.org</a>. We find it ideal for a complex documentation site because of the flexible navigation and layout options and built-in search. </cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <section className="sponsor-wrapper">
        <div className="trusted-wrapper-2">
          <h2 className="md-typeset-2">Become a sponsor</h2>
          <div className="mdx-trust-2">
            <p> By joining the <a href="insiders/">Insiders</a> program, you'll get immediate access to the latest features while also helping support the ongoing development of Material for MkDocs. Thanks to our <a href="insiders/#how-to-become-a-sponsor">awesome sponsors</a>, this project is actively maintained and kept in good shape. </p>
            <p className="mdx-trust-2-p"> <strong> Together, we can build documentation that simply works! </strong> </p>
          </div>
          <button className="catch-phrase-section-button-2">Get started</button>
        </div>
        <div className="mdx-content__column">
          <header> <h1 id="keep-in-touch" className="md-typeset-3"> Let's keep in touch <a href="#keep-in-touch" className="headerlink" title="Permanent link"> ¶ </a> </h1> </header>
          <div className="mdx-connect md-typeset">
            <div className="mdx-connect__inner">
              <p className="mdx-connect__inner-2">
                <a href="https://twitter.com/squidfunk" className="mdx-connect__link"> <span className="twemoji-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> </span> Follow <strong>@squidfunk</strong> on <strong>Twitter</strong> </a>
                <a href="https://gitter.im/squidfunk/mkdocs-material" className="mdx-connect__link"> <span className="twemoji-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z"></path></svg> </span> Ask for help on <strong>Gitter</strong> </a>
              </p>
              <p className="mdx-connect__inner-2">
                <a href="https://twitter.com/squidfunk" className="mdx-connect__link"> <span className="twemoji-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> </span> Follow <strong>@squidfunk</strong> on <strong>Github</strong> </a>
                <a href="https://gitter.im/squidfunk/mkdocs-material" className="mdx-connect__link"> <span className="twemoji-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path></svg> </span> Ask for help on <strong>DockerHub</strong> </a>
                <a href="https://gitter.im/squidfunk/mkdocs-material" className="mdx-connect__link"> <span className="twemoji-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg> </span> Ask for help on <strong>PyPI</strong> </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="md-footer">
        <nav className="md-footer__inner md-grid" aria-label="Footer"> <a href="getting-started/" className="md-footer__link md-footer__link--next" aria-label="Next: Installation" rel="next"> <div className="md-footer__title"> <div className="md-ellipsis"> <span className="md-footer__direction"> Next </span> Installation </div> </div> <div className="md-footer__button md-icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4Z"></path></svg> </div> </a> </nav>
        <div className="md-footer-meta md-typset">
          <div className="md-footer-meta__inner md-grid">
            <div className="md-copyright">
              <div className="md-copyright__highlight"> Copyright © 2016 - 2022 Martin Donath </div> Made with <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener"> Material for MkDocs Insiders </a> </div>
            <div className="md-social">
              <div>
                <a href="https://github.com/squidfunk" target="_blank" rel="noopener" title="github.com" className="md-social__link">
                  <svg className="link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://gitter.im/squidfunk/mkdocs-material" target="_blank" rel="noopener" title="gitter.im" className="md-social__link">
                  <svg className="link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://hub.docker.com/r/squidfunk/mkdocs-material/" target="_blank" rel="noopener" title="hub.docker.com" className="md-social__link">
                  <svg className="link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://pypi.org/project/mkdocs-material/" target="_blank" rel="noopener" title="pypi.org" className="md-social__link">
                  <svg className="link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/squidfunk" target="_blank" rel="noopener" title="twitter.com" className="md-social__link">
                  <svg className="link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default Home;