import React from "react";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigate = useNavigate();
  const goToDicePage = () => {
    navigate("/dice");
  };

  return (
    <div className="flex flex-col lg:gap-8 md:gap-6 sm:gap-5 ss:gap-4  text-white sm:w-96 ss:w-80">
      <div className="flex justify-center lg:text-2xl md:text-xl sm:text-lg ss:text-base">
        HOW TO PLAY
      </div>
      <div className="flex flex-col lg:gap-5 md:gap-3 ss:gap-2 lg:text-xl md:text-lg sm:text-base ss:text-sm ">
        <div>-A Game of 2 Players</div>
        <div>-Each player starts with a score of 0.</div>
        <div>
          -Players take turns rolling a virtual six-sided dice by clicking the
          'ROLL' button.
        </div>
        <div>
          -If a player rolls a 1, their turn ends (EXCEPT if the score is at 99
          and active Player needs to Win), and they lose any points accumulated
          during that turn.
        </div>
        <div>-The game automatically switches turns between players.</div>
        <div>-The first player to reach a score of 100 wins the game.</div>
      </div>
      <button
        className=" my-0 mx-auto lg:text-lg md:text-base lg:px-6 md:px-5 sm:px-4 ss:px-3 lg:py-3 sm:py-2 ss:py-1 bg-orange-500 w-fit md:rounded-xl sm:rounded-lg ss:rounded-md"
        onClick={goToDicePage}
      >
        PROCEED
      </button>
    </div>
  );
};

export default Instruction;
