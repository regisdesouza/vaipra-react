import { Button } from '@/shared/ui';
import styles from './PlanCard.module.css';

function PlanCard({ plan, onSelect }) {
  const cardClass = plan.highlight ? `${styles.card} ${styles.highlight}` : styles.card;

  return (
    <article className={cardClass}>
      {plan.highlight && <span className={styles.badge}>Mais popular</span>}
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.price}>
        {plan.price} <span className={styles.period}>{plan.period}</span>
      </p>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
      <Button variant={plan.highlight ? 'primary' : 'secondary'} onClick={onSelect}>
        Sortear meu destino
      </Button>
    </article>
  );
}

export default PlanCard;
