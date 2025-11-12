import React, { useState } from 'react';
import { Send, ArrowLeft, CheckCircle, Phone, Mail, User, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  score: number;
  onBack: () => void;
  onComplete: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ score, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configurazione EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // Parametri per l'email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        restaurant_name: formData.restaurantName,
        phone: formData.phone,
        message: formData.message,
        score: score,
        to_email: 'gianluca.tursi@gmail.com'
      };
      
      // Invia l'email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      setIsSubmitting(false);
      // Qui potresti aggiungere un messaggio di errore per l'utente
      alert('Errore nell\'invio del messaggio. Riprova più tardi.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Richiesta inviata con successo!
            </h2>
            <p className="text-gray-700 mb-6">
              Ti contatteremo entro 48 ore per offrirti una consulenza personalizzata per il tuo ristorante.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-4">
                Vuoi scegliere tu stesso un appuntamento in un orario e giorno specifico?
              </p>
              <a
                href="https://www.leggimenu.it/parla-con-un-consulente/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#537b83' }}
              >
                Prenota da qui
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Torna ai risultati
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trasforma il tuo ristorante in digitale
          </h2>
          <p className="text-gray-700 mb-8">
            Compila il form per ricevere una consulenza gratuita e scoprire come leggimenu può aiutarti a migliorare il tuo punteggio da {score} punti.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Il tuo nominativo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#537b83' } as React.CSSProperties}
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  Nome del ristorante *
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#537b83' } as React.CSSProperties}
                  placeholder="Ristorante Da Mario"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#537b83' } as React.CSSProperties}
                  placeholder="info@ristorante.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#537b83' } as React.CSSProperties}
                  placeholder="+39 123 456 7890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Messaggio (opzionale)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Raccontaci le tue esigenze specifiche..."
              />
            </div>

            <div className="rounded-lg p-4" style={{ backgroundColor: '#f0f4f5' }}>
              <h4 className="font-semibold text-gray-900 mb-2">Cosa riceverai:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Analisi personalizzata del tuo punteggio</li>
                <li>✓ Demo gratuita di leggimenu</li>
                <li>✓ Piano di digitalizzazione su misura</li>
                <li>✓ Preventivo senza impegno</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'text-white'
              }`}
              style={!isSubmitting ? { backgroundColor: '#537b83' } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Invio in corso...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Invia richiesta
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Inviando questo form accetti la nostra privacy policy. I tuoi dati saranno trattati con la massima riservatezza.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
