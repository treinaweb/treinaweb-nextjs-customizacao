import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// import MeuComponente from '../components/meu-componente';
const MeuComponente = dynamic(() => import('../components/meu-componente'));

const Home: NextPage = () => {
    const [isVisible, setVisible] = useState(false);
    return (
        <div className={styles.container}>
            <button onClick={() => setVisible(!isVisible)}>CLICK</button>
            {isVisible && <MeuComponente />}
        </div>
    );
};

export default Home;
