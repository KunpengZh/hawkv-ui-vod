
import styles from './index.module.css';

export default function ShoppingCart() {
    return <div className={styles.shoppingcart}>
        <div className={styles.cartTitleBar}>
            <div className={styles.cartTitle}>我的购物车</div>
            <div className={`${styles.cartSummary} ${styles.colorDesc}`}>已加入0门课程</div>
        </div>
        <div className={styles.cartBody}>
            <img src='/shoppingcart.svg' height="100px" width="100px" />
            <h2 className={styles.colorDesc}>人也匆匆,物也空空</h2>
        </div>
    </div>
}