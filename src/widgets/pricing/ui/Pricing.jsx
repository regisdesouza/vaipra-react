import { Container, SectionTitle } from '@/shared/ui';
import { plans, PlanCard } from '@/entities/plan';
import styles from './Pricing.module.css';

function Pricing({ onOpenModal }) {
  return (
    <section id="planos" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Planos"
          title="Escolha a sua aventura"
          subtitle="Todos os pacotes incluem passagens e hospedagem."
        />
        <div className={styles.grid}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={onOpenModal} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
