'use client';
import styles from './subscriberform.module.css';

const SubscriberForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);

    let newSub = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };

    const result = await fetch('/api/subscribers', {
      method: 'POST',
      body: JSON.stringify(newSub),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 'result');
      });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder={`Intast Navn`} />
        <input type="mail" name="email" placeholder={`Intast Email`} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubscriberForm;
