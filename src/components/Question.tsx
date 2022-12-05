import React from "react";
type QuestionProps = {
  question: any;
  next: (e: any) => void;
};
const Question = ({ question, next }: QuestionProps) => {
  const unshuffled_options = question.incorrect_answers.concat(
    question.correct_answer
  );
  const options = unshuffled_options.sort(() => Math.random() - 0.5);
  return (
    <div className="h-40 w-96 flex flex-col justify-between">
      <p>{question.question}</p>
        <div>
            {options.map((option: any, index: number) => (
              <div onChange={next}>
                <input
                  type="radio"
                  key={index}
                  name={question.question}
                  value={option}
                />
                <label>{option}</label>
              </div>
            ))}
        </div>
    </div>
  );
};

export default Question;
