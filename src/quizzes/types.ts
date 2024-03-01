export type QuizType = 'CSS' | 'Javascript';

type QuizLevel = 'Beginner' | 'Advanced';

export interface Question {
  id: number;
  title: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: number;
  title: string;
  level: QuizLevel;
  type: QuizType;
  questions: Question[];
}


// export interface Answer {
//   id: number;
//   questionId: number;
//   title: string;
//   isCorrect: boolean;
// }