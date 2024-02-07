'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from 'react';

const NavigationSite = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(true);
  let activeClass = isOpen ? styles.open : styles.closed;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(pages);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.nav}>
        <div className={activeClass}>
          {pages.map((page) => (
            <Link key={page.id} href={page.urlName}>
              {page.title}
            </Link>
          ))}
        </div>
        <RxHamburgerMenu className={styles.burgermenu} onClick={handleClick} />
      </div>
    </div>
  );
};

export default NavigationSite;
