import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/components/notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>Page not found</p>
      <Link to="/" className={styles.homeLink}>
        К каталогу
      </Link>
    </div>
  );
};

export default NotFoundPage;
