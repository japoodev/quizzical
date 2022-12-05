type ScoreProps = {
  score: number;
  amount: number;
  restart: () => void;
};

const ScoreScreen = ({ score, amount, restart }: ScoreProps) => {
  return (
    <div className="flex flex-col">
      <h3>
        You scored {score} out of {amount}
      </h3>
      <button className="bg-green-500 text-white rounded-xl mt-4  p-2" onClick={restart}>Restart</button>
    </div>
  );
};

export default ScoreScreen;
