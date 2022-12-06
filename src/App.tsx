import Layout from "./components/Layout";
import Start from "./components/Start";
import Game from "./components/Game";
import { useState } from "react";

const App = () => {
  const [start, setStart] = useState(false);
  const [quizDeets, setQuizDeets] = useState({
    amount: 5,
    category: 9,
    difficulty: "easy",
  });
  const startGame = () => {
    setStart(true);
  };
  const restart = () => {
    setStart(false);
  };
  return (
    <Layout>
      {start ? (
        <Game restart={restart} quizDeets={quizDeets} />
      ) : (
        <Start setQuizDeets={setQuizDeets} play={startGame} />
      )}
    </Layout>
  );
};

export default App;
