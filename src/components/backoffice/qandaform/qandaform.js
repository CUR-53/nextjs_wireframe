'use client';
import styles from './qandaform.module.css';

const QandaForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.answer.value);

    let newQanda = {
      question: e.target.elements.question.value,
      answer: e.target.elements.answer.value,
    };

    console.log(newQanda);

    const result = await fetch('/api/qandas', {
      method: 'POST',
      body: JSON.stringify(newQanda),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 'result');
      });
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
