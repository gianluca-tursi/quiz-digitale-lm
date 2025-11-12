# Quiz Ristoranti Digitali - leggimenu

Quiz interattivo per valutare il livello di digitalizzazione dei ristoranti.

## Tecnologie

- React + TypeScript
- Vite
- Tailwind CSS
- EmailJS

## Deploy

Il sito è deployato su Netlify con integrazione GitHub per deploy automatici.

## Variabili d'ambiente

Le seguenti variabili devono essere configurate su Netlify:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Nota:** Queste variabili sono pubbliche per design (la Public Key di EmailJS è intenzionalmente pubblica). Il warning di Netlify può essere ignorato in modo sicuro.
