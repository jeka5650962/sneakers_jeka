import './App.scss';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.svg';
import like from './assets/img/like.svg';
import profile from './assets/img/profile.svg';
import labelImg from './assets/img/slider1-1.jpg';
import sliderImg from './assets/img/slider1.png';
import search from './assets/img/search.svg';
import sneaker1 from './assets/img/sneaker-1.jpg';
import sneaker2 from './assets/img/sneaker-2.jpg';
import sneaker3 from './assets/img/sneaker-3.jpg';
import sneaker4 from './assets/img/sneaker-4.jpg';
import sneaker5 from './assets/img/sneaker-5.jpg';
import sneaker6 from './assets/img/sneaker-6.jpg';
import sneaker7 from './assets/img/sneaker-7.jpg';
import sneaker8 from './assets/img/sneaker-8.jpg';
import sneaker9 from './assets/img/sneaker-9.jpg';
import sneaker10 from './assets/img/sneaker-10.jpg';

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <div className="header__logo logo">
                        <div className="logo__img">
                            <img src={logo} width={40} height={40} alt="logo"/>
                        </div>
                        <div className="logo__text">
                            <h2>REACT SNEAKERS</h2>
                            <div className="logo__subtitle">Магазин лучших кроссовок</div>
                        </div>
                    </div>
                    <div className="header__info info">
                        <img src={cart} alt="cart"/>
                        <span>1205 руб.</span>
                        <img src={like} alt="like"/>
                        <img src={profile} alt="profile"/>
                    </div>
                </header>
                <div className="slider">
                    <div className="slider__info info">
                        <div className="info__text"><span>Stan Smith</span>, Forever!</div>
                        <button className="info__btn">Купить</button>
                    </div>
                    <div className="slider__img">
                        <img className="labelImg" src={labelImg} alt="labelImg"/>
                        <img src={sliderImg} alt="frog"/>
                        <div className="slider__arrow-right">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <main className="content">
                    <div className="block">
                        <h1 className="block__title">Все кроссовки</h1>
                        <div className="block__input">
                            <img src={search} alt="search"/>
                            <input placeholder={'Поиск...'} type="text"/>
                        </div>
                    </div>
                    <div className="sneakers">
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites active">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker1} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Blazer Mid Suede</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>12 999 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker2} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Air Max 270</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>12 999 руб.</span>
                                    </div>
                                    <div className="item__add active">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker3} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Blazer Mid Suede</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>8 499 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker4} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Кроссовки Puma X Aka Boku Future Rider</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>8 999 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker5} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Under Armour Curry 8</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>15 199 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker6} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Kyrie 7</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>11 299 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker7} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Jordan Air Jordan 11</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>10 799 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker8} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike LeBron XVIII</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>16 499 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker9} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Lebron XVIII Low</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>13 999 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sneakers__item item">
                            <div className="item__body">
                                <div className="item__favorites">
                                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1280.000000 1189.000000"
                                         preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                                           fill="#ececec" stroke="none">
                                            <path
                                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="item__image">
                                    <img src={sneaker10} alt="sneaker"/>
                                </div>
                                <h3 className="item__name">Мужские Кроссовки Nike Kyrie Flytrap IV</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>11 299 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#D3D3D3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;