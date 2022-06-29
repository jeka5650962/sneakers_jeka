import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import cart from '../../assets/img/cart.svg';
import like from '../../assets/img/like.svg';
import profile from '../../assets/img/profile.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logo__img}>
                    <img src={logo} width={40} height={40} alt="logo"/>
                </div>
                <div className={styles.logo__text}>
                    <h2>REACT SNEAKERS</h2>
                    <div className={styles.logo__subtitle}>Магазин лучших кроссовок</div>
                </div>
            </div>
            <div className={styles.info}>
                <img src={cart} alt="cart"/>
                <span>1205 руб.</span>
                <img src={like} alt="like"/>
                <img src={profile} alt="profile"/>
            </div>
        </header>
    )
}

export default Header;