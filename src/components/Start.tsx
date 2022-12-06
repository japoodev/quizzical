import { useState } from "react";

type ButtonProps = {
  play: () => void;
  setQuizDeets: (e: any) => void;
};

const Start = ({ play, setQuizDeets }: ButtonProps) => {
  const setAmount = (e: any) => {
    setQuizDeets((prevQuizDeets: any) => ({
      ...prevQuizDeets,
      amount: e.target.value,
    }));
  };
  const setCategory = (e: any) => {
    setQuizDeets((prevQuizDeets: any) => ({
      ...prevQuizDeets,
      category: e.target.value,
    }));
  };
  const setDifficulty = (e: any) => {
    setQuizDeets((prevQuizDeets: any) => ({
      ...prevQuizDeets,
      difficulty: e.target.value,
    }));
  };
  return (
    <div className="flex flex-col gap-5 p-6">
      <div>
        <label className="mr-2" htmlFor="amount">Number of Questions</label>
        <select
          className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
          name="amount"
          id="amount"
          onChange={setAmount}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <label className="mr-2" htmlFor="category">Category</label>
        <select
        placeholder="Select Category"
          className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
          name="category"
          id="category"
          onChange={setCategory}
        >
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select
          className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
          name="difficulty"
          id="difficulty"
          onChange={setDifficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="bg-secondary text-primary rounded-xl mt-4 text-xl p-2" onClick={play}>
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
