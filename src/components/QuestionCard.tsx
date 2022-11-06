import React from "react";
import { AnswerObject } from "../App";

type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <>
    <div>
      <p>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button className="answer-btn" disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default QuestionCard;
