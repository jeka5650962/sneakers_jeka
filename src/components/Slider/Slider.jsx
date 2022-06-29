import styles from './Slider.module.scss';
import labelImg from '../../assets/img/slider1-1.jpg';
import sliderImg from '../../assets/img/slider1.png';

function Slider() {
    return (
        <div className={styles.slider}>
            <div className={styles.info}>
                <div className={styles.info__text}><span>Stan Smith</span>, Forever!</div>
                <button className={styles.info__btn}>Купить</button>
            </div>
            <div className={styles.slider__img}>
                <img className={styles.labelImg} src={labelImg} alt="labelImg"/>
                <img src={sliderImg} alt="frog"/>
                <div className={styles.slider__arrowRight}>
                    <svg width={9} height={14} viewBox="0 0 7 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.999999L6 6L1 11" stroke="#cbcbcb" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Slider;