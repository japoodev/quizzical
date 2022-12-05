type ScoreProps = {
  score: number;
  amount: number;
  restart: () => void;
};

const ScoreScreen = ({ score, amount, restart }: ScoreProps) => {
  return (
    <div>
      <h3>
        You scored {score} out of {amount}
      </h3>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default ScoreScreen;
