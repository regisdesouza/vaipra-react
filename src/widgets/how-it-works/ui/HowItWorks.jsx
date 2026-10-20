import { Container, SectionTitle } from '@/shared/ui';
import styles from './HowItWorks.module.css';

const steps = [
  { title: 'Escolha o orçamento e o clima', text: 'Diga quanto quer gastar e o tipo de tempo que gosta.' },
  { title: 'Escolha o seu pacote', text: 'Fim de semana, semana ou sem limites.' },
  { title: 'Receba as pistas', text: 'Dicas do que levar na mala, sem entregar o destino.' },
  { title: 'Descubra no aeroporto', text: 'O destino é revelado no check-in.' },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Passo a passo"
          title="Como funciona"
          subtitle="Quatro passos entre você e a próxima aventura."
        />
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;
