'use client';
import styles from './qandaform.module.css';

const QandaForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="question" placeholder={`Intast Spørgsmål`} />
        <input type="text" name="answer" placeholder={`Intast Svar`} />
        <button>Submit</button>
      </form> 
    </div>
  );
};

export default QandaForm;
