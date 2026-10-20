import styles from './Button.module.css';

// variant: 'primary' | 'secondary' | 'ghost'  /  size: 'sm' | 'md' | 'lg'
// Se receber "href", vira um link (usado para rolar até âncoras).
function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  href,
  type = 'button',
  children,
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
