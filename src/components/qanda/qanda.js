'use client';
import { useEffect, useState } from 'react';
import styles from './qanda.module.css';

const Qanda = ({ qanda }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${open ? styles.active : null}`} onClick={() => setOpen(!open)}>
      <h2 className={styles.question}>{qanda.question}</h2>
      <div className={styles.answer}>{qanda.answer}</div>
    </div>
  );
};

export default Qanda;
