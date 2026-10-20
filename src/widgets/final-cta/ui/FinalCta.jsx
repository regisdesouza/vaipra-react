import { Button, Container } from '@/shared/ui';
import styles from './FinalCta.module.css';

function FinalCta({ onOpenModal }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <h2>Não espere mais. Descubra para onde vai.</h2>
          <p>A mala é sua. O destino é nosso. A história é de vocês dois.</p>
          <Button size="lg" onClick={onOpenModal}>
            Sortear meu destino
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default FinalCta;
