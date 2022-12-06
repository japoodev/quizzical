import {useState} from "react";
type QuestionProps = {
  question: any;
  next: (e: any) => void;
};

const Question = ({ question, next }: QuestionProps) => {
  
  const unshuffled_options = question.incorrect_answers.concat(
    question.correct_answer
    );
    
    const options = unshuffled_options.sort(() => Math.random() - 0.5);
    

    // Using dangerouslySetInnerHTML to render the question and options to fix character encoding issues
    function createQuestion(): { __html: any; } {
      return { __html: question.question };
    }

    function createOption({ option, index }: { option: string; index: number; }) {
      return { __html: option };
    }
  return (
    <div className="flex md:w-[60vw] md:align-middle flex-col p-4 h-[40vh] justify-between">
      <p
        className="px-5 text-xl"
        dangerouslySetInnerHTML={createQuestion()}
      ></p>
      <ul className="justify-self-end grid gap-4 w-screen md:w-full md:grid-cols-2">
        {options.map((option: string, index: number) => (
          <li className="px-5" onChange={next}>
            <input
              id={option}
              type="radio"
              name={question.question}
              key={index}
              value={option}
              className="hidden peer"
            />
            <label
              htmlFor={option}
              className="flex items-center justify-center w-full h-12 text-xl text-white bg-primary rounded-md cursor-pointer peer-checked:bg-green-600 peer-checked:text-white"
              dangerouslySetInnerHTML={createOption({ option, index })}
            ></label>
          </li>
        ))}
      </ul>
    </div>
  );
};      

export default Question;
