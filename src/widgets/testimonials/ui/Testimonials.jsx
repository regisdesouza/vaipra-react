import { Container, SectionTitle } from '@/shared/ui';
import { testimonials, TestimonialCard } from '@/entities/testimonial';
import styles from './Testimonials.module.css';

function Testimonials() {
  return (
    <section id="avaliacoes" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Prova social"
          title="Quem foi, aprovou"
          subtitle="Avaliações fictícias de viajantes igualmente fictícios."
        />
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
