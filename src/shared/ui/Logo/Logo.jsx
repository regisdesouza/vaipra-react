import styles from './Logo.module.css';

function Logo() {
  return (
    <span className={styles.logo}>
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
        />
      </svg>
      Vaipra
    </span>
  );
}

export default Logo;
