import React from 'react';
import { Compass, Clock, UserCheck, Smartphone, Globe } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo_colore.png" alt="leggimenu Logo" style={{ width: '176px' }} />
          </div>
          <span className="text-sm text-gray-600 hidden sm:block">Il tuo menu digitale intelligente</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <Compass className="w-20 h-20 mx-auto" style={{ color: '#537b83' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            🧭 Scopri quanto è al passo con i tempi il tuo ristorante
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Verifica se stai sfruttando tutto il potenziale del tuo ristorante.
            Fai il test gratuito e capisci come aumentare prenotazioni, clienti abituali e recensioni grazie al digitale.
          </p>
          
          <button
            onClick={onStartQuiz}
            className="text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#537b83' }}
          >
            👉 Fai il test ora
          </button>
          
          <p className="mt-4 text-sm text-gray-600 flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Nessuna registrazione richiesta – dura meno di 2 minuti</span>
          </p>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 mx-auto mb-4" style={{ color: '#537b83' }} />
              <h3 className="font-semibold text-gray-900 mb-2">Menu Digitale QR</h3>
              <p className="text-gray-600 text-sm">Aggiorna in tempo reale, aggiungi foto e gestisci allergeni</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <UserCheck className="w-12 h-12 mx-auto mb-4" style={{ color: '#537b83' }} />
              <h3 className="font-semibold text-gray-900 mb-2">Prenotazioni Smart</h3>
              <p className="text-gray-600 text-sm">Sistema automatico con promemoria per i clienti</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#537b83' }} />
              <h3 className="font-semibold text-gray-900 mb-2">Multilingua</h3>
              <p className="text-gray-600 text-sm">Menu tradotto automaticamente per clienti internazionali</p>
            </div>
          </div>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ backgroundColor: '#537b83' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;
