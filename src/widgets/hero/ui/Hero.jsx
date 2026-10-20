import { BoardingPass, Button, Container } from '@/shared/ui';
import styles from './Hero.module.css';

const stats = [
  { value: '+12 mil', label: 'viajantes surpreendidos' },
  { value: '4,7', label: 'nota média das avaliações' },
  { value: '48h', label: 'para cancelar sem custo' },
];

function Hero({ onOpenModal }) {
  return (
    <section id="topo" className={styles.hero}>
      <Container>
        <div className={styles.intro}>
          <h1>Você escolhe o clima. A gente escolhe o destino.</h1>
          <p className={styles.subtitle}>
            Defina seu orçamento, diga o clima que você quer e descubra para onde vai só no
            aeroporto. Roteiro, hospedagem e passagens já inclusos.
          </p>
          <div className={styles.actions}>
            <Button size="lg" onClick={onOpenModal}>
              Sortear meu destino
            </Button>
            <Button size="lg" variant="secondary" href="#como-funciona">
              Ver como funciona
            </Button>
          </div>
        </div>

        <div className={styles.panel}>
          <span className={`${styles.deco} ${styles.decoOne}`} aria-hidden="true">☁️</span>
          <span className={`${styles.deco} ${styles.decoTwo}`} aria-hidden="true">✈️</span>
          <span className={`${styles.deco} ${styles.decoThree}`} aria-hidden="true">🌴</span>
          <div className={styles.pass}>
            <BoardingPass destination="???" revealed={false} />
          </div>
        </div>

        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.value}>{stat.value}</dt>
              <dd className={styles.label}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default Hero;
