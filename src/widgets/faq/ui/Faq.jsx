import { useState } from 'react';
import { Container, SectionTitle } from '@/shared/ui';
import { faqItems } from '@/entities/faq-item';
import styles from './Faq.module.css';

function Faq() {
  // Guarda o id da pergunta aberta (só uma por vez)
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <ul className={styles.list}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className={styles.item}>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    {item.question}
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <p id={`faq-${item.id}`} className={styles.answer}>
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default Faq;
