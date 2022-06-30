import React from "react";
import styles from './Card.module.scss';

function Card(props) {

    const [isFavorites, setIsFavorites] = React.useState(false);
    const [isAdded, setIsAdded] = React.useState(false);

    const addFavoritesOnClick = () => {
        setIsFavorites(true);
    }
    const addPlusOnClick = () => {
        setIsAdded(true);
    }

    return (
        <div className={styles.item}>
            <div className={styles.item__body}>
                <button onClick={addFavoritesOnClick}
                        className={isFavorites ? `${styles.item__favorites} ${styles.checked}` : `${styles.item__favorites}`}>
                    <svg width={18} height={18} version="1.0" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1280.000000 1189.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                           fill="#ececec" stroke="none">
                            <path
                                d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                        </g>
                    </svg>
                </button>
                <div className={styles.item__image}>
                    <img src={props.imageUrl} alt="sneaker"/>
                </div>
                <h3 className={styles.item__name}>{props.title}</h3>
                <div className={styles.item__costs}>
                    <div className={styles.item__price}>
                        <h4>Цена:</h4>
                        <span>{props.price} руб.</span>
                    </div>
                    <button onClick={addPlusOnClick}
                            className={isAdded ? `${styles.item__add} ${styles.checked}` : `${styles.item__add}`}>
                        <svg width={18} height={18} viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                fill="#ececec"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;