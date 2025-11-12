import React from 'react';
import { Trophy, TrendingUp, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';
import { getResultLevel } from '../data/results';
import { features } from '../data/features';

interface ResultsProps {
  score: number;
  answers: number[];
  onContactRequest: () => void;
  onRetakeQuiz: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, answers, onContactRequest, onRetakeQuiz }) => {
  const result = getResultLevel(score);
  const maxScore = 30; // 10 domande x 3 punti max
  const percentage = (score / maxScore) * 100;

  // Identifica le aree di miglioramento basate sulle risposte
  const improvementAreas = answers
    .map((answer, index) => ({ answer, index }))
    .filter(item => item.answer < 3)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Result Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Il tuo ristorante è: {result.title}
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-6 h-6" style={{ color: '#537b83' }} />
              <span className="text-2xl font-semibold" style={{ color: '#537b83' }}>
                {score} / {maxScore} punti
              </span>
            </div>
          </div>

          {/* Progress Circle */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="transform -rotate-90 w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#537b83" />
                  <stop offset="100%" stopColor="#537b83" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">{Math.round(percentage)}%</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {result.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onContactRequest}
              className="text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#537b83' }}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Richiedi una consulenza gratuita
            </button>
            <button
              onClick={onRetakeQuiz}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Rifai il quiz
            </button>
          </div>

          {/* Improvement Areas */}
          {improvementAreas.length > 0 && (
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f4f5' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Aree di miglioramento consigliate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {improvementAreas.map((item) => {
                  const feature = features[item.index];
                  return feature ? (
                    <div key={item.index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.benefit}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Features Preview */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2" style={{ color: '#537b83' }} />
              Cosa offre leggimenu
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {Object.values(features).slice(0, 8).map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="mt-1" style={{ color: '#537b83' }}>✓</span>
                  <span className="text-sm text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
