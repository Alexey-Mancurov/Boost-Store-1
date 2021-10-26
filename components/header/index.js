import Link from "next/link";
import { LanguageSwitcher } from "../languageSwitcher";
import { connect } from "react-redux";
import GameItem from "./GameItem";
import { setCurrentGame } from "../../store/games/actions";
import Registration from "../Registration/Registration";
import { useState } from "react";
import EntrAccount from "../EntrAccount/EntrAccount";

const Header = (props) => {
  let gamesList = props.games.map((game) => (
    <GameItem game={game} setCurrentGame={props.setCurrentGame} />
  ));

  let [isAuthorisationOpen, setIsAuthorisationOpen] = useState(false);

  const getIsAuthorisationOpen = () => {
    setIsAuthorisationOpen((isAuthorisationOpen = !isAuthorisationOpen));
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <ul className="header__navbar">
            <li className="header__navbar-item select">
              <button className="header__navbar-link header__navbar-link_games">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="27" height="27" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0" transform="scale(0.037037)" />
                    </pattern>
                    <image
                      id="image0"
                      width="27"
                      height="27"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAqklEQVRIie2VQQoDIRAE2xz8QfLihT3lCYE8TliIj6ggGDASxSGbQxYbPChd9BycGQEeWIBAWyF7klfFMbEJWDvGWmsVZmId8JB01piipEvhNLEpjOLBNYwtj4k9DVa1i2bYf4bF4k7jvBQr3sSmsJuhuHt1t7F55FyBrdP9W/Z8GlfDrHvv6d/q2L/RS1okhc6PCtnjK97GzhXT8MwVM8P2DZsr5rsVA/4JZqdJyEEiu18AAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                <span>Games</span>
                <svg
                  className="header__navbar-link-icon-after-games"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
                </svg>
              </button>
              <div className="header__navbar-games-list select__wrap-list">
                {gamesList}
              </div>
            </li>
            <li className="header__navbar-item select">
              <Link href="/news">
                <a className="header__navbar-link header__navbar-link_news">
                  <svg
                    className="header__navbar-link-icon-before-news"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.673828 4.67188H5.79492V0.673828C5.79492 0.301695 6.09662 0 6.46875 0H22.3262C22.6983 0 23 0.301695 23 0.673828V18.1035C23 19.9613 21.4886 21.4727 19.6309 21.4727H3.36914C1.5114 21.4727 0 19.9613 0 18.1035V5.3457C0 4.97357 0.301695 4.67188 0.673828 4.67188ZM19.6309 20.125C20.7455 20.125 21.6523 19.2182 21.6523 18.1035V1.34766H7.14258C7.14258 19.1577 7.15107 18.1675 7.12712 18.4214C7.06855 19.0461 6.83558 19.6352 6.46718 20.125H19.6309ZM1.34766 18.1035C1.34766 19.2182 2.25449 20.125 3.36914 20.125C3.52035 20.125 3.62497 20.125 3.77344 20.125C4.88808 20.125 5.79492 19.2182 5.79492 18.1035V6.01953H1.34766V18.1035Z" />
                    <path d="M9.34375 3.23438H19.4062C19.7784 3.23438 20.0801 3.53607 20.0801 3.9082C20.0801 4.28034 19.7784 4.58203 19.4062 4.58203H9.34375C8.97162 4.58203 8.66992 4.28034 8.66992 3.9082C8.66992 3.53607 8.97162 3.23438 9.34375 3.23438Z" />
                    <path d="M9.34375 6.10938H19.4062C19.7784 6.10938 20.0801 6.41107 20.0801 6.7832C20.0801 7.15534 19.7784 7.45703 19.4062 7.45703H9.34375C8.97162 7.45703 8.66992 7.15534 8.66992 6.7832C8.66992 6.41107 8.97162 6.10938 9.34375 6.10938Z" />
                    <path d="M9.34375 16.8906H19.4062C19.7784 16.8906 20.0801 17.1923 20.0801 17.5645C20.0801 17.9366 19.7784 18.2383 19.4062 18.2383H9.34375C8.97162 18.2383 8.66992 17.9366 8.66992 17.5645C8.66992 17.1923 8.97162 16.8906 9.34375 16.8906Z" />
                    <path d="M9.34375 8.98438H14.375C14.7471 8.98438 15.0488 9.28607 15.0488 9.6582V14.6895C15.0488 15.0616 14.7471 15.3633 14.375 15.3633H9.34375C8.97162 15.3633 8.66992 15.0616 8.66992 14.6895V9.6582C8.66992 9.28607 8.97162 8.98438 9.34375 8.98438ZM10.0176 14.0156H13.7012V10.332H10.0176V14.0156Z" />
                    <path d="M19.4062 11.4102H17.25C16.8779 11.4102 16.5762 11.1085 16.5762 10.7363C16.5762 10.3642 16.8779 10.0625 17.25 10.0625H19.4062C19.7784 10.0625 20.0801 10.3642 20.0801 10.7363C20.0801 11.1085 19.7784 11.4102 19.4062 11.4102Z" />
                    <path d="M19.4062 14.2852H17.25C16.8779 14.2852 16.5762 13.9835 16.5762 13.6113C16.5762 13.2392 16.8779 12.9375 17.25 12.9375H19.4062C19.7784 12.9375 20.0801 13.2392 20.0801 13.6113C20.0801 13.9835 19.7784 14.2852 19.4062 14.2852Z" />
                  </svg>
                  <span>News</span>
                  <svg
                    className="header__navbar-link-icon-after-news"
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
                  </svg>
                </a>
              </Link>
              <div className="select__wrap-list">
                <ul className="select__list">
                  <li className="select__list-item">
                    <a
                      className="select__list-link select__list-link_active"
                      href="#"
                    >
                      All news
                    </a>
                  </li>
                  <li className="select__list-item">
                    <a className="select__list-link" href="#">
                      Company news
                    </a>
                  </li>
                  <li className="select__list-item">
                    <a className="select__list-link" href="#">
                      New games
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <form className="header__search">
            <input
              className="header__search-input"
              type="text"
              placeholder="Search"
            />
            <button className="header__search-button" type="submit"></button>
          </form>
        </div>
        <div className="header__right">
          <div className="header__wrap-btn-call">
            <button className="btn-call" href="#" type="button">
              Contact us
            </button>
          </div>
          <div className="select header__select header__select header__select-currency">
            <div className="select__field">
              <span className="select__field-text">EUR, €</span>
              <svg
                className="select__field-icon"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
              </svg>
            </div>
            <div className="select__wrap-list">
              <ul className="select__list">
                <li className="select__list-item">
                  <Link href="#">
                    <a className="select__list-link">USD, $</a>
                  </Link>
                </li>
                <li className="select__list-item">
                  <Link href="#">
                    <a className="select__list-link select__list-link_active">
                      EUR, €
                    </a>
                  </Link>
                </li>
                <li className="select__list-item">
                  <Link href="#">
                    <a className="select__list-link">GBP, £</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <LanguageSwitcher />
          <div
            className={`link-auth header__link-auth ${isAuthorisationOpen ? 'header__auth-select':''}`} 
          >
            <div className={'link__auth-inner'} onClick={getIsAuthorisationOpen}>
            <svg
              className="link-auth__icon"
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6206 12.8966C12.4965 12.8966 14.1209 12.2611 15.4481 11.0074C16.7753 9.75381 17.4481 8.22002 17.4481 6.44807C17.4481 4.67673 16.7753 3.14274 15.4479 1.88879C14.1204 0.635452 12.4962 0 10.6206 0C8.74443 0 7.12047 0.635452 5.79323 1.88899C4.466 3.14254 3.79297 4.67653 3.79297 6.44807C3.79297 8.22002 4.466 9.75401 5.79345 11.0076C7.1209 12.2609 8.74508 12.8966 10.6206 12.8966Z" />
              <path d="M21.9467 21.2072C21.9111 20.6925 21.8391 20.1311 21.733 19.5382C21.626 18.9409 21.4882 18.3762 21.3232 17.8601C21.1528 17.3267 20.9211 16.7999 20.6346 16.2951C20.3372 15.7711 19.988 15.3149 19.5961 14.9395C19.1863 14.5467 18.6845 14.2309 18.1043 14.0006C17.5261 13.7714 16.8854 13.6554 16.1999 13.6554C15.9308 13.6554 15.6704 13.766 15.1677 14.0939C14.8583 14.296 14.4963 14.5298 14.0924 14.7883C13.7469 15.0088 13.279 15.2153 12.701 15.4024C12.1371 15.5851 11.5645 15.6778 10.9994 15.6778C10.4343 15.6778 9.86192 15.5851 9.2974 15.4024C8.72001 15.2155 8.25206 15.009 7.90704 14.7885C7.50689 14.5324 7.14476 14.2986 6.83071 14.0937C6.32857 13.7658 6.06804 13.6552 5.79885 13.6552C5.11323 13.6552 4.47267 13.7714 3.89467 14.0008C3.31487 14.2307 2.81292 14.5465 2.40271 14.9397C2.01101 15.3153 1.66156 15.7713 1.36461 16.2951C1.07833 16.7999 0.846572 17.3265 0.67597 17.8603C0.511202 18.3764 0.373393 18.9409 0.266364 19.5382C0.160342 20.1303 0.0883187 20.6919 0.0527096 21.2078C0.017704 21.7132 0 22.2378 0 22.7676C0 24.1464 0.43757 25.2627 1.30044 26.0859C2.15264 26.8982 3.28026 27.3103 4.65152 27.3103H17.3485C18.7197 27.3103 19.847 26.8984 20.6994 26.0859C21.5624 25.2633 22 24.1468 22 22.7674C21.9998 22.2352 21.9819 21.7102 21.9467 21.2072Z" />
            </svg>
            <span>My account</span>
            </div>
            <EntrAccount isAuthorisationOpen={isAuthorisationOpen}/>
          </div>
          <Link href="#">
            <a className="link-cart header__link-cart">
              <svg
                className="link-cart__icon"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.4648 18.2302C13.3958 18.2302 11.3274 18.2252 9.25903 18.2302C8.48589 18.2302 7.78671 18.0319 7.1672 17.5673C6.45593 17.0368 6.00143 16.3442 5.85847 15.473C5.67852 14.3795 5.53413 13.2775 5.37267 12.1825C5.18774 10.9285 5.0021 9.67443 4.81575 8.42037C4.65074 7.29994 4.48738 6.1795 4.32569 5.05907C4.21473 4.30054 4.10662 3.54131 3.99353 2.78278C3.95014 2.48887 3.85696 2.41238 3.55681 2.41238C2.78651 2.41238 2.01621 2.41238 1.2459 2.41238C0.639194 2.40742 0.195363 2.06746 0.0367506 1.5037C-0.00284671 1.34745 -0.0105396 1.18487 0.014128 1.02561C0.0387956 0.866338 0.0953219 0.713621 0.180356 0.576508C0.265391 0.439394 0.377203 0.320673 0.509166 0.227381C0.641129 0.13409 0.790557 0.0681263 0.948595 0.0334001C1.00607 0.0186822 1.06497 0.0101346 1.12428 0.0079034C2.13143 0.0178187 3.14499 -0.040965 4.14289 0.0617297C5.19272 0.169382 6.10386 1.01927 6.3215 2.139C6.45095 2.80403 6.54342 3.47615 6.63944 4.14756C6.66149 4.29842 6.70132 4.36003 6.86562 4.36003C11.7615 4.35531 16.6572 4.3539 21.5526 4.35578C22.9452 4.35578 24.3381 4.35578 25.7313 4.35578C26.3067 4.35578 26.7413 4.64404 26.9276 5.13485C27.0343 5.41814 27.0066 5.7064 26.9497 5.99111C26.6616 7.43025 26.3671 8.86798 26.0762 10.3071C25.8067 11.6421 25.5428 12.9786 25.2704 14.3122C25.1594 14.8547 25.0627 15.4036 24.9033 15.9327C24.6252 16.8576 24.0072 17.5078 23.1358 17.9235C22.6493 18.1565 22.1323 18.2295 21.5988 18.2288L15.4648 18.2302Z" />
                <path d="M23.5911 22.4782C23.593 23.0966 23.4108 23.7016 23.0674 24.2168C22.724 24.732 22.2349 25.1343 21.6619 25.3726C21.0889 25.611 20.4577 25.6748 19.8483 25.556C19.2389 25.4372 18.6785 25.1411 18.2381 24.7051C17.7977 24.2692 17.497 23.713 17.3741 23.1068C17.2512 22.5007 17.3116 21.8719 17.5476 21.3C17.7836 20.728 18.1847 20.2386 18.7001 19.8936C19.2154 19.5487 19.822 19.3636 20.443 19.3619C21.2753 19.3599 22.0745 19.6869 22.6648 20.2713C23.2551 20.8556 23.5882 21.6494 23.5911 22.4782Z" />
                <path d="M9.65665 19.3684C11.4092 19.379 12.7862 20.7919 12.7606 22.5817C12.735 24.2056 11.3985 25.6016 9.70643 25.6122C7.97735 25.6228 6.5854 24.1837 6.59749 22.4698C6.60958 20.7792 8.01362 19.3556 9.65665 19.3684Z" />
              </svg>
              <span className="link-cart__count">2</span>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  games: state.games.games,
});

const mapDispatchToProps = {
  setCurrentGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
