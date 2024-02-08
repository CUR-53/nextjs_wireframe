'use client';
import styles from './subFormList.module.css';
import { useEffect, useState } from 'react';

const SubFormList = () => {
  const [subsData, setSubsData] = useState([]);

  useEffect(() => {
    const getSubs = async () => {
      return await fetch('/api/subscribers').then((res) => res.json());
    };

    getSubs().then((data) => {
      setSubsData(data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <ul>
        {subsData.map((sub) => (
          <li key={sub.id}>
            {sub.name} - {sub.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubFormList;
