import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    title: "Come consultano il menù i tuoi clienti?",
    options: [
      { text: "Solo menu cartaceo", points: 0 },
      { text: "Menù qr code pdf/immagine", points: 1 },
      { text: "Menu qr code collegato al sito web", points: 2 },
      { text: "Menù QR code sempre aggiornato", points: 3 }
    ],
    feature: "Evidenzia la funzione QR + aggiornabilità + galleria immagini"
  },
  {
    id: 2,
    title: "📸 Le foto del tuo menù sono:",
    options: [
      { text: "Nessuna, solo testo", points: 0 },
      { text: "Alcune foto scattate da smartphone", points: 1 },
      { text: "Tutti i piatti hanno immagini ottimizzate e coerenti con lo stile del locale", points: 3 }
    ],
    feature: "Galleria immagini ottimizzate"
  },
  {
    id: 3,
    title: "🌍 Il tuo menù è disponibile in più lingue?",
    options: [
      { text: "Solo italiano", points: 0 },
      { text: "Italiano + traduzioni manuali (PDF o cartaceo)", points: 1 },
      { text: "Tradotto automaticamente in più lingue nel menù digitale", points: 3 }
    ],
    feature: "Multilingua automatico"
  },
  {
    id: 4,
    title: "📅 Come gestisci le prenotazioni?",
    options: [
      { text: "Solo telefono", points: 0 },
      { text: "WhatsApp", points: 1 },
      { text: "Da Google o Instagram", points: 2 },
      { text: "Sistema di prenotazione online con promemoria automatici per i clienti", points: 3 }
    ],
    feature: "Funzione Prenotazione Tavolo + Reminder"
  },
  {
    id: 5,
    title: "💳 I clienti possono ordinare o pagare dal tavolo in autonomia?",
    options: [
      { text: "No, solo con il cameriere", points: 0 },
      { text: "Solo per asporto o delivery tramite app delivery", points: 1 },
      { text: "Sì, anche dal tavolo, con pagamento online e stampa automatica degli ordini", points: 3 }
    ],
    feature: "Ordine al Tavolo, Pagamento Online, Stampa automatica"
  },
  {
    id: 6,
    title: "🛵 Come gestisci gli ordini da asporto o consegna?",
    options: [
      { text: "Non faccio asporto o delivery", points: 0 },
      { text: "Solo telefono / WhatsApp", points: 1 },
      { text: "Attraverso piattaforme esterne (con commissioni)", points: 2 },
      { text: "Con un sistema interno di ordini digitali e notifiche automatiche", points: 3 }
    ],
    feature: "Funzione Asporto e Delivery + notifiche"
  },
  {
    id: 7,
    title: "📢 Come comunichi promozioni o eventi ai tuoi clienti?",
    options: [
      { text: "Solo post sui social", points: 0 },
      { text: "Messaggi manuali su WhatsApp", points: 1 },
      { text: "Sistema automatico con notifiche push, email e WhatsApp", points: 3 }
    ],
    feature: "Notifiche e automazioni"
  },
  {
    id: 8,
    title: "🎁 Hai un modo per fidelizzare i clienti e premiarli?",
    options: [
      { text: "No, tutto manuale", points: 0 },
      { text: "Ho una fidelity card cartacea", points: 1 },
      { text: "Raccolgo i contatti ma non li uso", points: 2 },
      { text: "Ho una fidelity card digitale con promozioni e archivio clienti", points: 3 }
    ],
    feature: "Marketing: fidelity card e archivio clienti"
  },
  {
    id: 9,
    title: "⭐ Come gestisci le recensioni online?",
    options: [
      { text: "Aspetto che arrivino spontaneamente", points: 0 },
      { text: "Chiedo di persona o sui social", points: 1 },
      { text: "Invio link automatici dopo la visita per aumentare le recensioni positive", points: 3 }
    ],
    feature: "Marketing: aumento media recensioni"
  },
  {
    id: 10,
    title: "📊 Come scegli i piatti da promuovere nel menù?",
    options: [
      { text: "In base all'intuito", points: 0 },
      { text: "In base a margine e preferenze dei clienti", points: 2 },
      { text: "Utilizzo menu engineering, abbinamenti consigliati e statistiche per spingere i piatti più redditizi", points: 3 }
    ],
    feature: "Menu Engineering e piatti consigliati"
  }
];
