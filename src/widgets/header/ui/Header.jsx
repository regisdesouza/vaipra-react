import { Button, Container, Logo } from '@/shared/ui';
import styles from './Header.module.css';

function Header({ onOpenModal }) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <a href="#topo" aria-label="Vaipra, voltar ao topo">
            <Logo />
          </a>
          <nav className={styles.nav} aria-label="Principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#planos">Planos</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Button size="sm" onClick={onOpenModal}>
            Sortear meu destino
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
