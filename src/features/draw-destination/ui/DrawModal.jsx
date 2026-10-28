import { useEffect, useState } from 'react';
import { Button, Modal, BoardingPass } from '@/shared/ui';
import { budgetOptions, climateOptions, tempCheckedAt } from '@/entities/destination';
import { airportMessages, loadingMessages, pickDestination } from '../model/pickDestination.js';
import styles from './DrawModal.module.css';

const titles = {
  form: 'Sortear meu destino',
  loading: 'Sorteando...',
  result: 'Seu destino secreto está pronto!',
  reserved: 'Reserva confirmada!',
  checkin: 'Rumo ao aeroporto...',
  airport: 'Bem-vindo ao aeroporto!',
};

function DrawModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form');
  const [budget, setBudget] = useState('');
  const [climate, setClimate] = useState('');
  const [destination, setDestination] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (step !== 'loading' && step !== 'checkin') return;

    const messages = step === 'loading' ? loadingMessages : airportMessages;
    setMessageIndex(0);
    const messageTimer = setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 800);
    const endTimer = setTimeout(() => {
      if (step === 'loading') {
        setDestination(pickDestination(budget, climate));
        setStep('result');
      } else {
        setStep('airport');
      }
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
  const waitingMessages = step === 'checkin' ? airportMessages : loadingMessages;

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
            <legend>Qual temperatura você quer encontrar?</legend>
            <div className={styles.options}>
              {climateOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={styles.option}
                  aria-pressed={climate === option.value}
                  onClick={() => setClimate(option.value)}
                >
                  <strong>
                    <span aria-hidden="true">{option.emoji}</span> {option.label}
                  </strong>
                  <span className={styles.hint}>{option.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <Button size="lg" disabled={!canDraw} onClick={() => setStep('loading')}>
            Sortear
          </Button>
        </div>
      )}

      {(step === 'loading' || step === 'checkin') && (
        <div className={styles.loading}>
          <span className={styles.plane} aria-hidden="true">
            {step === 'checkin' ? '🧳' : '✈️'}
          </span>
          <p aria-live="polite">{waitingMessages[messageIndex]}</p>
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
            <strong>Temperatura média:</strong> cerca de {destination.temp} °C
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
          </p>
          <Button onClick={() => setStep('checkin')}>🛫 Simular que estou no aeroporto</Button>
          <div className={styles.extra}>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              Fechar
            </Button>
          </div>
        </div>
      )}

      {step === 'airport' && destination && (
        <div className={styles.result}>
          <BoardingPass destination={destination.name} revealed />
          <p className={styles.reveal}>
            <span aria-hidden="true">{destination.emoji}</span> Você vai para {destination.name}!
          </p>
          <p aria-live="polite">
            {destination.name}, {destination.country}. Temperatura média de cerca de {destination.temp} °C.
          </p>
          <p className={styles.hint}>Temperaturas consultadas em {tempCheckedAt}.</p>
          <Button onClick={handleClose}>Boa viagem!</Button>
        </div>
      )}
    </Modal>
  );
}

export default DrawModal;
