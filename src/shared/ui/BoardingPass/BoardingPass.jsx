import styles from './BoardingPass.module.css';

// destination: texto do destino. Só aparece quando revealed = true.
function BoardingPass({ destination = '', revealed = false }) {
  const shownDestination = revealed && destination ? destination : '???';

  return (
    <article className={styles.pass} aria-label="Cartão de embarque do Vaipra">
      <div className={styles.main}>
        <header className={styles.header}>
          <span className={styles.brand}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              />
            </svg>
            Vaipra
          </span>
          <span className={styles.label}>Cartão de embarque</span>
        </header>

        <div className={styles.route}>
          <div>
            <span className={styles.label}>De</span>
            <p className={styles.place}>Sua casa</p>
          </div>
          <span className={styles.arrow} aria-hidden="true">
            ✈
          </span>
          <div>
            <span className={styles.label}>Para</span>
            <p
              className={`${styles.place} ${revealed ? styles.revealed : styles.hidden}`}
            >
              {shownDestination}
            </p>
          </div>
        </div>

        <dl className={styles.details}>
          <div>
            <dt className={styles.label}>Passageiro</dt>
            <dd>Viajante Surpresa</dd>
          </div>
          <div>
            <dt className={styles.label}>Voo</dt>
            <dd>VP 042</dd>
          </div>
          <div>
            <dt className={styles.label}>Portão</dt>
            <dd>B12</dd>
          </div>
          <div>
            <dt className={styles.label}>Assento</dt>
            <dd>7A</dd>
          </div>
        </dl>
      </div>

      <div className={styles.stub} aria-hidden="true">
        <div className={styles.barcode} />
        <span className={styles.stubCode}>VP042-7A</span>
      </div>
    </article>
  );
}

export default BoardingPass;
