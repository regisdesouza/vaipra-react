import styles from './TestimonialCard.module.css';

function TestimonialCard({ testimonial }) {
  return (
    <article className={styles.card}>
      <p className={styles.stars} role="img" aria-label={`Nota ${testimonial.rating} de 5`}>
        {'⭐'.repeat(testimonial.rating)}
      </p>
      <p className={styles.text}>“{testimonial.text}”</p>
      <footer className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {testimonial.avatar}
        </span>
        <span>
          <strong>{testimonial.name}</strong>
          <br />
          <span className={styles.city}>{testimonial.city}</span>
        </span>
      </footer>
    </article>
  );
}

export default TestimonialCard;
