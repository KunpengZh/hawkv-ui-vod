import styles from './index.module.css';
import { Avatar, Space, Card } from 'antd';
import { getAppSequence } from '@/utils/utils';

export interface CardProps {
    className: string;
    classIcon: string;
    classDesc: string;
    classLevel: string;
    classPrice: string;
}

export default function ClassCard({ cardList }: { cardList: CardProps[] }) {
    return <div className={styles.cardListContainer}>
        {cardList.map((card, index) => <Card
            key={getAppSequence()}
            className={styles.classCard}
            hoverable
            cover={
                <div className={`linerGradient${index % 4 + 1} ${styles.cartCover}`}>
                    <Space size='large'>
                        <Avatar src={`/${card.classIcon}`} size={100} />
                        <span className={styles.className}>{card.className}</span>
                    </Space>
                </div>}
        >
            <Card.Meta
                title={card.classDesc}
                description={
                    <Space size='large'>
                        <span>{card.classPrice}</span>
                        <span>{card.classLevel}</span>
                    </Space>}
            />
        </Card>)}
    </div>
}