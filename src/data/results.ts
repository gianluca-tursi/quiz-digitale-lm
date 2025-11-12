import { ResultLevel } from '../types';

export const resultLevels: ResultLevel[] = [
  {
    title: "Locale Tradizionale",
    emoji: "🏛️",
    description: "Hai ancora un grande margine di crescita digitale: un menù interattivo, prenotazioni automatiche e fidelizzazione clienti possono farti risparmiare tempo e aumentare gli incassi.",
    minScore: 0,
    maxScore: 12
  },
  {
    title: "Locale Evoluto",
    emoji: "🚀",
    description: "Ottimo! Stai già usando alcuni strumenti digitali, ma potresti automatizzare ordini e promozioni per ridurre il lavoro manuale e fidelizzare meglio i clienti.",
    minScore: 13,
    maxScore: 21
  },
  {
    title: "Locale Smart",
    emoji: "🌟",
    description: "Complimenti! Sei tra i ristoranti più moderni. Scopri come leggimenu può aiutarti a fare il passo successivo e migliorare ancora di più l'esperienza dei tuoi clienti.",
    minScore: 22,
    maxScore: 30
  }
];

export const getResultLevel = (score: number): ResultLevel => {
  return resultLevels.find(
    level => score >= level.minScore && score <= level.maxScore
  ) || resultLevels[0];
};
