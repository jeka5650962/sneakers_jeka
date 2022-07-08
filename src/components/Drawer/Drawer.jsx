import styles from './Drawer.module.scss'
import boxImage from '../../assets/img/box.png'

function Drawer({onClose, items = [], onRemove}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.top}>
                    <h5>Корзина</h5>
                    <button
                        onClick={onClose}
                        className={styles.top__btn}>
                        <svg width={18} height={18} viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#cbcbcb"/>
                        </svg>
                    </button>
                </div>

                <div className={styles.emptyBasket}>
                    <div className={styles.emptyBasket__body}>
                        <div className={styles.emptyBasket__image}>
                            <img src={boxImage} alt="box"/>
                        </div>
                        <div className={styles.emptyBasket__label}>Корзина пустая</div>
                        <div className={styles.emptyBasket__description}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</div>
                        <button className={styles.greenButton}>
                            <svg width={16} height={14} viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Вернуться назад
                        </button>
                    </div>
                </div>

                {/*<div className={styles.drawer__body}>
                    <div className={styles.drawer__items}>
                        {items.map((obj, index) => (
                            <div className={styles.item} key={index}>
                                <div className={styles.item__img}>
                                    <img src={obj.imageUrl} alt="sneaker"/>
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.info__name}>{obj.title}</h3>
                                    <span className={styles.info__price}>{obj.price} ₽</span>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className={styles.item__btn}>
                                    <svg width={11} height={11} viewBox="0 0 10 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                            fill="#ececec"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.drawer__info}>
                        <div className={styles.sum}>
                            <div className={styles.sum__text}>Итого:</div>
                            <div className={styles.sum__line}></div>
                            <div className={styles.sum__value}>21 498 ₽</div>
                        </div>
                        <div className={styles.tax}>
                            <div className={styles.tax__text}>Налог 5%:</div>
                            <div className={styles.tax__line}></div>
                            <div className={styles.tax__value}>1 074 ₽</div>
                        </div>
                        <button className={styles.greenButton}>
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
                </div>*/}
            </div>
        </div>
    )
}

export default Drawer
