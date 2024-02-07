import QandaForm from '@/components/backoffice/qandaform/qandaform';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Q&A</h1>
      <QandaForm />
    </div>
  );
}
