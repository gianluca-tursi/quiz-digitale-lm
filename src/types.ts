export type QuizState = 'hero' | 'quiz' | 'results' | 'contact';

export interface Question {
  id: number;
  title: string;
  options: {
    text: string;
    points: number;
  }[];
  feature?: string;
}

export interface ResultLevel {
  title: string;
  emoji: string;
  description: string;
  minScore: number;
  maxScore: number;
}
