'use client';
import Link from 'next/link';
import styles from './navigationBackOffice.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from 'react';

const NavigationBackOffice = () => {
  const [isOpen, setIsOpen] = useState(true);
  let activeClass = isOpen ? styles.open : styles.closed;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.nav}>
        <div className={activeClass}>
          <Link href="/backoffice/qandas">Qandas</Link>
          <Link href="/backoffice/subscribers">Subscribers</Link>
          {/* {pages.map((page) => (
            <Link key={page.id} href={page.urlName}>
              {page.title}
            </Link>
          ))} */}
        </div>
        <RxHamburgerMenu className={styles.burgermenu} onClick={handleClick} />
      </div>
    </div>
  );
};

export default NavigationBackOffice;
