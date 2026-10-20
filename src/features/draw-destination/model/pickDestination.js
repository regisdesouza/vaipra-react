import { destinations } from '@/entities/destination';

export const loadingMessages = [
  'Preparando as malas...',
  'Consultando o mapa...',
  'Chamando o piloto...',
];

// Filtra por clima e orçamento; se não achar, usa só o clima.
export function pickDestination(budget, climate) {
  const exact = destinations.filter((d) => d.climate === climate && d.budget === budget);
  const list = exact.length > 0 ? exact : destinations.filter((d) => d.climate === climate);
  return list[Math.floor(Math.random() * list.length)];
}
