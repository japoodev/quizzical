import { useEffect, useState } from "react";
import Question from "./Question";
import ScoreScreen from "./ScoreScreen";
import Loading from './Loading'

type GameProps = {
  quizDeets: any;
  restart: () => void;
};

const Game = ({ quizDeets, restart }: GameProps) => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<any>([]);
  const [score, setScore] = useState(0);

  const handleNext = (e: any) => {
    e.preventDefault();
    const answer = e.target.value;
    if (answer === quiz[0].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    console.log(answer);
    console.log(quiz[0].correct_answer);
    setQuiz((prevQuiz: string | any[]) => prevQuiz.slice(1));
  };

  useEffect(() => {
    let ignore = false;
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${quizDeets.amount}&category=${quizDeets.category}&difficulty=${quizDeets.difficulty}&type=multiple`
        );
        const data = await response.json();
        if (!ignore) {
          setQuiz(data.results);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchQuiz();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : quiz.length > 0 ? (
        <Question key={quiz[0].question} question={quiz[0]} next={handleNext} />
      ) : (
        <ScoreScreen
          score={score}
          amount={quizDeets.amount}
          restart={restart}
        />
      )}
    </>
  );
};

export default Game;
