import styles from './page.module.css';
import Link from 'next/link';

const PageAbout = () => {   
    
    return <div className={styles.page}>
        <div>
            <h1>About Page</h1>
            <span><Link href='/'>2023</Link></span>
        </div>
    </div>

}

export default PageAbout;