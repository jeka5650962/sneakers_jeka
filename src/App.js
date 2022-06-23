import './App.scss';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.svg';
import like from './assets/img/like.svg';
import profile from './assets/img/profile.svg';

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
                            <h2 className="logo__title">REACT SNEAKERS</h2>
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
            </div>
        </div>
    );
}

export default App;