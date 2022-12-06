type ScoreProps = {
  score: number;
  amount: number;
  restart: () => void;
};

const ScoreScreen = ({ score, amount, restart }: ScoreProps) => {
  return (
    <>
      <h3 className="text-2xl">
        You scored {score} out of {amount}
      </h3>
      {score === amount ? (
        <h3 className="text-2xl">You are a genius! 🧠</h3>
      ) : (
        <h3 className="text-base">You can do better!</h3>
      )
      }
      <button className="bg-primary text-white rounded-xl mt-4 px-6 py-3" onClick={restart}>Restart</button>
    </>
  );
};

export default ScoreScreen;
