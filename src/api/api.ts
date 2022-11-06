import { shuffleArray } from "../utils/utils";

export type QuizQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizQuestionState = QuizQuestion & {
  answer: string[];
};

export enum QuizDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: QuizDifficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: QuizQuestion) => ({
    ...question,
    answer: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
