'use client';
import { useEffect, useState } from 'react';
import styles from './qandas.module.css';
import Qanda from '../qanda/qanda';

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
    <div className={`${styles.accordion} ${open ? styles.active : null}`}>
      {qandasData.map((qanda) => (
        <Qanda key={qanda.id} qanda={qanda} />
      ))}
    </div>
  );
};

export default Qandas;
