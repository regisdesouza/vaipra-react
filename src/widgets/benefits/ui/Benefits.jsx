import { Container, SectionTitle } from '@/shared/ui';
import styles from './Benefits.module.css';

const benefits = [
  { icon: '🎲', tone: 'dark', title: 'Surpresa de verdade', text: 'Nem você sabe para onde vai até o embarque.' },
  { icon: '🧳', tone: 'orange', title: 'Tudo pronto', text: 'Passagem, hospedagem e roteiro já incluídos.' },
  { icon: '💸', tone: 'orange', title: 'Cabe no seu bolso', text: 'Você define o orçamento, a gente respeita.' },
  { icon: '🌤️', tone: 'dark', title: 'Clima sob medida', text: 'Escolha a faixa de temperatura e a gente acha o lugar.' },
  { icon: '🛡️', tone: 'dark', title: 'Plano B garantido', text: 'Se o destino não rolar, trocamos sem custo.' },
  { icon: '📸', tone: 'yellow', title: 'Memórias que contam história', text: 'Viagens que viram a melhor história do ano.' },
];

function Benefits() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Por que Vaipra?"
          title="Tudo que você precisa para viajar. Sem decidir nada."
          subtitle="A gente cuida da decisão. Você cuida de fazer a mala."
        />
        <ul className={styles.grid}>
          {benefits.map((benefit) => (
            <li key={benefit.title} className={`${styles.card} ${styles[benefit.tone]}`}>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
              <span className={styles.icon} aria-hidden="true">
                {benefit.icon}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Benefits;
