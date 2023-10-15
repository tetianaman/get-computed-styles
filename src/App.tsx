import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    return (
        <h1 className={styles.header} style={{ fontStyle: 'italic', fontWeight: 'bold'}}>
            Hello, world
        </h1>
    );
}

export default App;
