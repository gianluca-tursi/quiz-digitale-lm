import React, { useState } from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ContactForm from './components/ContactForm';
import { QuizState } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>('hero');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const startQuiz = () => {
    setQuizState('quiz');
    setScore(0);
    setAnswers([]);
  };

  const completeQuiz = (finalScore: number, quizAnswers: number[]) => {
    setScore(finalScore);
    setAnswers(quizAnswers);
    setQuizState('results');
  };

  const showContactForm = () => {
    setQuizState('contact');
  };

  const resetQuiz = () => {
    setQuizState('hero');
    setScore(0);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {quizState === 'hero' && <Hero onStartQuiz={startQuiz} />}
      {quizState === 'quiz' && <Quiz onComplete={completeQuiz} />}
      {quizState === 'results' && (
        <Results 
          score={score} 
          answers={answers}
          onContactRequest={showContactForm}
          onRetakeQuiz={resetQuiz}
        />
      )}
      {quizState === 'contact' && (
        <ContactForm 
          score={score}
          onBack={() => setQuizState('results')}
          onComplete={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
