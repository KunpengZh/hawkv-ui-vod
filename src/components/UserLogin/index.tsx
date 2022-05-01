import { useEffect, useState } from 'react';
import { Input, Modal, Button, Space, Select, Form } from 'antd';
import styles from './index.module.css';
import { getAppSequence, getWindowHeight, getWindowWidth } from '../../utils/utils';
import Link from 'next/link';

interface UserLoginProps {
    visible: boolean;
    eventHandler: EventHanler
}

const UserLoginForm = ({ eventHandler }: any) => {
    const onCancelLogin = () => eventHandler({ type: 'onCancelLogin' });

    const onFinish = () => {
        eventHandler({ type: 'onCancelLogin' });
    }
    const onFinishFailed = () => {
        eventHandler({ type: 'onCancelLogin' });
    }
    const accountRegistration = () => {
        eventHandler({ type: 'onCancelLogin' });
    }

    return <div className={styles.loginContainer}>
        <div className={styles.loginImg}>
            <img src='/hawk.svg' width='60%' />
        </div>
        <div className={styles.loginFormContainer}>
            <Form
                className={styles.loginForm}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="emailAddr"
                >
                    <Input width="100%" placeholder='请输入登陆邮箱/手机号' size='large' />
                </Form.Item>
                <Form.Item
                    name="password"
                >
                    <Input type="password" placeholder='请输入登陆密码' size='large' />
                </Form.Item>
                <div className={styles.loginBar}>
                    <Button htmlType="submit" type='primary' style={{ width: '50%' }} size='large'>登陆</Button>
                </div>

            </Form>
            <div className={styles.loginBar}>
                <a href='#' onClick={accountRegistration}>没有账号? 马上注册</a>
            </div>
            <Space className={styles.loginBar} size="large">
                <img src='/weichat.svg' width="40px" />
                <img src='/qq.svg' width="40px" />
            </Space>
        </div>



        {/* <div className={styles.loginBar}>
            <Space size='large'>
                <Button>Login</Button>
                <Button onClick={onCancelLogin}>取消</Button>
            </Space>
        </div> */}
    </div>
}



export default function UserLogin(props: UserLoginProps) {
    const [windowW, setWindowW] = useState<string | number>('70vw');
    const [windowH, setWindowH] = useState<string | number>('70vh');

    useEffect(() => {
        const w = getWindowWidth();
        const h = getWindowHeight();
        if (w > 0 && h > 0) {
            setWindowH(h * 0.7);
            setWindowW(w - 300);
        }
    })
    const { visible, eventHandler } = props;
    return <Modal
        key={getAppSequence()}
        visible={visible}
        title={false}
        width={windowW}
        bodyStyle={{
            height: windowH,
            overflow: 'scroll'
        }}
        centered={true}
        destroyOnClose={true}
        maskClosable={false}
        closable={true}
        footer={null}
        onCancel={() => eventHandler({ type: 'onCancelLogin' })}
    >
        <UserLoginForm {...props} />
    </Modal>
}