import styles from './SectionTitle.module.css';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header className={styles.wrapper}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

export default SectionTitle;
