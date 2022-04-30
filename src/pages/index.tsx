import { useState } from 'react';
import Head from 'next/head'
import styles from './index.module.css';
import { homePageTitle, homePageDescription } from '../constants/appConstants';
import HeaderBar from '../components/HeaderBar';
import getAppData from '../appdata';
import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from 'next/dynamic';

const UserLogin = dynamic(() => import('../components/UserLogin'))

const Home = ({ headerBarMenuList }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [loginVisable, setLoginVisable] = useState(false);

  const eventHandler: EventHanler = ({ type, data }: EventHanlerProps) => {
    switch (type) {
      case 'onUserLogin':
        setLoginVisable(true);
        break;
      case 'onCancelLogin':
        setLoginVisable(false);
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{homePageTitle}</title>
        <meta name="description" content={homePageDescription} />
        <link rel="icon" href="/ngvod/hawk.svg" />
      </Head>
      <HeaderBar headerMenuList={headerBarMenuList} eventHandler={eventHandler} />
      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        请关注赵老师倾情演出
      </footer>
      <UserLogin visible={loginVisable} eventHandler={eventHandler} />
    </div>
  )
}

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {
  const headerBarMenuList: string[] = getAppData('headerMenu');
  return {
    props: {
      headerBarMenuList
    }
  }
}

export default Home
