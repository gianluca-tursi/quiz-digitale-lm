import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { questions } from '../data/questions';

interface QuizProps {
  onComplete: (score: number, answers: number[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (points: number) => {
    setSelectedOption(points);
    
    // Avanzamento automatico dopo 500ms
    setTimeout(() => {
      const newAnswers = [...answers, points];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        const totalScore = newAnswers.reduce((sum, points) => sum + points, 0);
        onComplete(totalScore, newAnswers);
      }
    }, 500);
  };


  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
      setAnswers(answers.slice(0, -1));
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Domanda {currentQuestion + 1} di {questions.length}</span>
            <span>{Math.round(progress)}% completato</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="h-3 rounded-full transition-all duration-300"
              style={{ background: '#537b83', width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {question.title}
          </h2>
          
          {question.feature && (
            <p className="text-sm mb-6 font-medium" style={{ color: '#537b83' }}>
              → {question.feature}
            </p>
          )}

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.points)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedOption === option.points
                    ? 'shadow-md transform scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                style={selectedOption === option.points ? { borderColor: '#537b83', backgroundColor: '#f0f4f5' } : {}}
              >
                <div className="flex items-center">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedOption === option.points
                        ? ''
                        : 'border-gray-300'
                    }`}
                    style={selectedOption === option.points ? { borderColor: '#537b83', backgroundColor: '#537b83' } : {}}
                  >
                    {selectedOption === option.points && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-800">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Indietro</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
