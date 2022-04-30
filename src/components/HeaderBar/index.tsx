import styles from './index.module.css';
import { Menu, Dropdown, Avatar, Space } from 'antd';
import ShoppingCart from '../ShoppingCart';

interface HeaderBarProps {
    headerMenuList: string[];
    eventHandler: EventHanler
}

function HeaderBar({ headerMenuList, eventHandler }: HeaderBarProps) {

    const onUserLogin = () => {
        eventHandler({ type: 'onUserLogin' });
    }

    return <div className={styles.headerBar}>
        <img src='/ngvod/hawk.svg' height="45px" width="45px" />
        <Menu mode="horizontal" items={headerMenuList.map(item => ({ label: item, type: 'group' }))} className={styles.menuBarHeight} />
        <Space className={styles.rightContainer} size="large">
            <Dropdown placement="bottomLeft" overlay={ShoppingCart}><img src="/ngvod/shoppingcart.svg" height="20px" width="20px" /></Dropdown>
            <Avatar src='/ngvod/user.svg' size="small" className={styles.avatar} />
            <span><a href='#' onClick={onUserLogin} className={styles.userLogin}>用户登陆</a></span>
        </Space>
    </div>
}

export default HeaderBar;

