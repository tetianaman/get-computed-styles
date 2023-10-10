import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div id={styles.app} className={styles.App}>
            <div className={styles.card}>
                <div className={styles.title}>Text</div>
            </div>
        </div>
    );
}

export default App;
