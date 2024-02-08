import SubFormList from '@/components/backoffice/subformlist/subFormList';
import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Subscribers</h1>
      <SubFormList />
    </div>
  );
};

export default Page;
