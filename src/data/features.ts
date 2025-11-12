interface Feature {
  icon: string;
  title: string;
  benefit: string;
}

export const features: { [key: number]: Feature } = {
  0: {
    icon: "📱",
    title: "Menu Digitale QR",
    benefit: "Aggiorna in tempo reale prezzi e disponibilità"
  },
  1: {
    icon: "📸",
    title: "Galleria Immagini",
    benefit: "Aumenta gli ordini del 30% con foto professionali"
  },
  2: {
    icon: "🌍",
    title: "Menu Multilingua",
    benefit: "Accogli clienti internazionali senza barriere"
  },
  3: {
    icon: "📅",
    title: "Prenotazioni Online",
    benefit: "Riduci le chiamate del 70% con conferme automatiche"
  },
  4: {
    icon: "💳",
    title: "Ordini dal Tavolo",
    benefit: "Velocizza il servizio e aumenta lo scontrino medio"
  },
  5: {
    icon: "🛵",
    title: "Delivery Integrato",
    benefit: "Zero commissioni sugli ordini diretti"
  },
  6: {
    icon: "📢",
    title: "Marketing Automatico",
    benefit: "Comunica con migliaia di clienti in un click"
  },
  7: {
    icon: "🎁",
    title: "Fidelity Card Digitale",
    benefit: "Aumenta i clienti abituali del 40%"
  },
  8: {
    icon: "⭐",
    title: "Gestione Recensioni",
    benefit: "Migliora la tua reputazione online automaticamente"
  },
  9: {
    icon: "📊",
    title: "Menu Engineering",
    benefit: "Aumenta i margini evidenziando i piatti più redditizi"
  }
};
