import { destinations, climateOptions } from '@/entities/destination';

export const loadingMessages = [
  'Preparando as malas...',
  'Consultando o mapa...',
  'Chamando o piloto...',
];

export const airportMessages = [
  'Chegando ao aeroporto...',
  'Fazendo o check-in...',
  'Imprimindo o cartão de embarque...',
];

export function pickDestination(budget, climate) {
  const range = climateOptions.find((option) => option.value === climate);
  const inRange = destinations.filter((d) => d.temp >= range.min && d.temp <= range.max);
  const exact = inRange.filter((d) => d.budget === budget);
  const list = exact.length > 0 ? exact : inRange;
  return list[Math.floor(Math.random() * list.length)];
}
