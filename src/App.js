import './App.scss';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.svg';
import like from './assets/img/like.svg';
import profile from './assets/img/profile.svg';
import labelImg from './assets/img/slider1-1.jpg';
import sliderImg from './assets/img/slider1.png';
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
            <div className="overlay">
                <div className="drawer">
                    <div className="drawer__top top">
                        <h5>Корзина</h5>
                        <button className="top__btn">
                            <svg width={18} height={18} viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                    fill="#cbcbcb"/>
                            </svg>
                        </button>
                    </div>
                    <div className="drawer__body">
                        <div className="drawer__items">
                            <div className="drawer__item item">
                                <div className="item__img">
                                    <img src={sneaker2} alt="sneaker"/>
                                </div>
                                <div className="item__info info">
                                    <h3 className="info__name">Мужские Кроссовки Nike Air Max 270</h3>
                                    <span className="info__price">12 999 руб.</span>
                                </div>
                                <button className="item__btn">
                                    <svg width={11} height={11} viewBox="0 0 10 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                            fill="#ececec"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="drawer__item item">
                                <div className="item__img">
                                    <img src={sneaker4} alt="sneaker"/>
                                </div>
                                <div className="item__info info">
                                    <h3 className="info__name">Кроссовки Puma X Aka Future Rider</h3>
                                    <span className="info__price">8 999 руб.</span>
                                </div>
                                <button className="item__btn">
                                    <svg width={11} height={11} viewBox="0 0 10 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                            fill="#ececec"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="drawer__info info">
                            <div className="info__sum sum">
                                <div className="sum__text">Итого:</div>
                                <div className="sum__line"></div>
                                <div className="sum__value">21 498 руб.</div>
                            </div>
                            <div className="info__tax tax">
                                <div className="tax__text">Налог 5%:</div>
                                <div className="tax__line"></div>
                                <div className="tax__value">1 074 руб.</div>
                            </div>
                            <button className="info__btn button">
                                Оформить заказ
                                <svg width={16} height={14} viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
                            <svg width={9} height={14} viewBox="0 0 7 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999999L6 6L1 11" stroke="#cbcbcb" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <main className="content">
                    <div className="block">
                        <h1 className="block__title">Все кроссовки</h1>
                        <div className="block__input">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                    stroke="#ececec" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                <h3 className="item__name">Кроссовки Puma X Aka Future Rider</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>8 999 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                <h3 className="item__name">Мужские Кроссовки Nike 7</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>11 299 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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
                                <h3 className="item__name">Мужские Кроссовки Nike Flytrap IV</h3>
                                <div className="item__costs">
                                    <div className="item__price">
                                        <h4>Цена:</h4>
                                        <span>11 299 руб.</span>
                                    </div>
                                    <div className="item__add">
                                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                fill="#ececec"/>
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