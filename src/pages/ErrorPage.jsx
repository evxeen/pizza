import styles from '../scss/components/ErrorPage.module.scss';

const ErrorPage = ({ status }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.errorMessage}>{status || 'Page Not Found'}</div>
    </div>
  );
};

export default ErrorPage;
