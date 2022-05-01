import { useMemo } from 'react';
import { Carousel, Row, Col, Space, Avatar } from 'antd';
import styles from './index.module.css';
import Link from 'next/link';
import { getAppSequence } from '@/utils/utils';

interface ClassBarProps {
    classShowList: { [key: string]: string[] }
}

export default function ClassBar({ classShowList }: ClassBarProps) {
    const menuItems = (menuItemArray: string[]) => {
        const menuElList: JSX.Element[] = [];
        menuItemArray.forEach((menu, menuIndex) => {
            if (menuIndex === 0) {
                return menuElList.push(<Link href='#' key={getAppSequence()} ><a className={styles.menuItems}>{menu}</a></Link>);
            }
            menuElList.push(<span key={getAppSequence()}> / </span>)
            return menuElList.push(<Link href='#' key={getAppSequence()}><a className={styles.menuItems}>{menu}</a></Link>)
        });
        return menuElList;
    }
    const menuContent = useMemo(() => Object.keys(classShowList).map(key => {
        return <Row style={{ marginBottom: '10px' }} key={getAppSequence()}>
            <Col span={4} key={getAppSequence()} style={{ textAlign: 'right', paddingRight: '10px' }}>{key}:</Col>
            <Col span={20} key={getAppSequence()}>
                {menuItems(classShowList[key])}
            </Col>
        </Row >
    }), [classShowList]);

    const getCarousel = useMemo(() => {
        return <div key={getAppSequence()} className={styles.carouseContainer}>
            <Carousel autoplay className={styles.carouse}>
                <div className={styles.carouselBlock1}>
                    <h3 className={styles.carouselStyle}>1</h3>
                </div>
                <div className={styles.carouselBlock2}>
                    <h3 className={styles.carouselStyle}>2</h3>
                </div>
                <div className={styles.carouselBlock3}>
                    <h3 className={styles.carouselStyle}>3</h3>
                </div>
                <div className={styles.carouselBlock4}>
                    <h3 className={styles.carouselStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    }, [classShowList])

    return <div className={styles.classBarContainer}>
        <div className={styles.classTop}>
            <div className={styles.menuContent}>{menuContent}</div>
            <div className={styles.imageContent}>
                {getCarousel}
            </div>
        </div>
        <div className={styles.classBottom}>
            <Space size="large">
                <span><Avatar src='/zhanlue.svg' size={60} shape='circle' /> 战略解码</span>
                <span><Avatar src='/yanfa.svg' size={60} shape='circle'/> 产品研发</span>
                <span><Avatar src='/supplyChain.svg' size={60} shape='circle'/> 智能供应链</span>
            </Space>
        </div>
    </div>
}