'use client';
import { useEffect, useState } from 'react';
import styles from './qandas.module.css';

const Qandas = () => {
  const [qandasData, setQandasData] = useState([]);
  useEffect(() => {
    const getQandas = async () => {
      return await fetch('/api/qandas').then((res) => res.json());
    };

    getQandas().then((data) => {
      setQandasData(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Qandas</h1>
      {qandasData.map((qanda) => (
        <li key={qanda.id}>
          <h2>{qanda.question}</h2>
          <p>{qanda.answer}</p>
        </li>
      ))}
    </div>
  );
};

export default Qandas;
