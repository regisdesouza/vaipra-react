import { useEffect, useState } from 'react';
import { Button, Modal, BoardingPass } from '@/shared/ui';
import { budgetOptions, climateOptions } from '@/entities/destination';
import { loadingMessages, pickDestination } from '../model/pickDestination.js';
import styles from './DrawModal.module.css';

const titles = {
  form: 'Sortear meu destino',
  loading: 'Sorteando...',
  result: 'Seu destino secreto está pronto!',
  reserved: 'Reserva confirmada!',
};

function DrawModal({ isOpen, onClose }) {
  // step: 'form' | 'loading' | 'result' | 'reserved'
  const [step, setStep] = useState('form');
  const [budget, setBudget] = useState('');
  const [climate, setClimate] = useState('');
  const [destination, setDestination] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  // Durante o "loading": troca a mensagem a cada 800 ms e termina em 2,5 s.
  // O destino sorteado fica guardado, mas NUNCA é mostrado: só as pistas.
  // A revelação acontece apenas no aeroporto (fora desta simulação).
  useEffect(() => {
    if (step !== 'loading') return;

    setMessageIndex(0);
    const messageTimer = setInterval(() => {
      setMessageIndex((index) => (index + 1) % loadingMessages.length);
    }, 800);
    const endTimer = setTimeout(() => {
      setDestination(pickDestination(budget, climate));
      setStep('result');
    }, 2500);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(endTimer);
    };
  }, [step, budget, climate]);

  function changeChoices() {
    setDestination(null);
    setStep('form');
  }

  function handleClose() {
    changeChoices();
    setBudget('');
    setClimate('');
    onClose();
  }

  const canDraw = budget !== '' && climate !== '';

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={titles[step]}>
      {step === 'form' && (
        <div className={styles.form}>
          <fieldset className={styles.group}>
            <legend>Qual o seu orçamento?</legend>
            <div className={styles.options}>
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={styles.option}
                  aria-pressed={budget === option.value}
                  onClick={() => setBudget(option.value)}
                >
                  <strong>{option.label}</strong>
                  <span className={styles.hint}>{option.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.group}>
            <legend>Que clima você quer?</legend>
            <div className={styles.options}>
              {climateOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={styles.option}
                  aria-pressed={climate === option.value}
                  onClick={() => setClimate(option.value)}
                >
                  <span aria-hidden="true">{option.emoji}</span> <strong>{option.label}</strong>
                </button>
              ))}
            </div>
          </fieldset>

          <Button size="lg" disabled={!canDraw} onClick={() => setStep('loading')}>
            Sortear
          </Button>
        </div>
      )}

      {step === 'loading' && (
        <div className={styles.loading}>
          <span className={styles.plane} aria-hidden="true">✈️</span>
          <p aria-live="polite">{loadingMessages[messageIndex]}</p>
        </div>
      )}

      {step === 'result' && destination && (
        <div className={styles.result}>
          <BoardingPass destination="???" revealed={false} />
          <p className={styles.secret}>
            🔒 O destino é um segredo. Você só descobre no aeroporto, no check-in.
          </p>
          <p>
            <strong>Pista:</strong> {destination.teaser}
          </p>
          <p>
            <strong>Na mala:</strong> {destination.packTip}
          </p>

          <Button onClick={() => setStep('reserved')}>Quero essa viagem</Button>

          <div className={styles.extra}>
            <Button variant="ghost" size="sm" onClick={() => setStep('loading')}>
              Sortear de novo
            </Button>
            <Button variant="ghost" size="sm" onClick={changeChoices}>
              Mudar escolhas
            </Button>
          </div>
        </div>
      )}

      {step === 'reserved' && (
        <div className={styles.result}>
          <BoardingPass destination="???" revealed={false} />
          <p className={styles.reveal}>🎉 Reserva simulada!</p>
          <p>
            Seu destino continua secreto. Ele será revelado só no aeroporto, na hora do check-in.
            Em um projeto real, você receberia um e-mail com os horários.
          </p>
          <Button onClick={handleClose}>Fechar</Button>
        </div>
      )}
    </Modal>
  );
}

export default DrawModal;
