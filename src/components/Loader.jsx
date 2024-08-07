import styles from '../scss/components/loader.module.scss';

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
