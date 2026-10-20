import { Container, Logo } from '@/shared/ui';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.slogan}>Você escolhe o clima. A gente escolhe o destino.</p>
          </div>

          <nav aria-label="Navegue" className={styles.column}>
            <h2 className={styles.heading}>Navegue</h2>
            <a href="#como-funciona">Como funciona</a>
            <a href="#planos">Planos</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#faq">Perguntas frequentes</a>
          </nav>

          <nav aria-label="Pacotes" className={styles.column}>
            <h2 className={styles.heading}>Pacotes</h2>
            <a href="#planos">Fim de Semana</a>
            <a href="#planos">Semana</a>
            <a href="#planos">Sem Limites</a>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.heading}>Atendimento</h2>
            <p>24 horas por dia, 7 dias por semana</p>
            <p>(Fictício) 0800 000 0000</p>
          </div>
        </div>

        <p className={styles.notice}>
          © 2026 Vaipra. Projeto acadêmico fictício: nenhuma viagem é vendida de verdade e todos
          os preços, avaliações e números são inventados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
