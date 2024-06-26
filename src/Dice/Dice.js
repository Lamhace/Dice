import React, { useEffect, useState } from "react";
import { MdFlipCameraAndroid } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import "./Dice.css";
import { useDispatch, useSelector } from "react-redux";
import { rollDice, resetGame } from "../Redux/DiceSlice";
import dice1 from "../media/images/dice1.png";
import dice2 from "../media/images/dice2.png";
import dice3 from "../media/images/dice3.png";
import dice4 from "../media/images/dice4.png";
import dice5 from "../media/images/dice5.png";
import dice6 from "../media/images/dice6.png";
import audioSound from '../media/audio/dice-142528.mp3'

const Dice = () => {
  const dispatch = useDispatch();
  const [diceValue, setDiceValue] = useState(1);
  const [dropDice, setDropDice] = useState(false);

  const { playerScores, player1Active, player2Active } = useSelector(
    (store) => store.Dice
  );

  const rollTheDice = () => {
    const DiceValue = Math.floor(Math.random() * 6 + 1);
    dispatch(rollDice(DiceValue));
    setDiceValue(DiceValue);
    setDropDice(false)
    if(dropDice){
      const audio = new Audio(audioSound)
      audio.play()
    }
  };
  useEffect(() => {
    setDropDice(true);
  }, [dropDice]);

  let diceImage;
  switch (diceValue) {
    case 1:
      diceImage = dice1;
      break;
    case 2:
      diceImage = dice2;
      break;
    case 3:
      diceImage = dice3;
      break;
    case 4:
      diceImage = dice4;
      break;
    case 5:
      diceImage = dice5;
      break;
    case 6:
      diceImage = dice6;
      break;
    default:
      break;
  }
  const resetDiceGame = () => {
    setDiceValue(1);
    dispatch(resetGame());
  };

  return (
    <div className="relative gridContainer grid grid-cols-2">
      <div className="container1 bg-slate-100 flex justify-center items-center flex-col">
        <h1 className="playerText">PLAYER 1</h1>
        {player1Active && (
          <div className="activePlayer1 absolute">
            <GoDotFill className=" text-green-600" />
          </div>
        )}
        <div className="score  ">
          {playerScores[0] === 100 ? (
            <span className="text-green-500">WINS</span>
          ) : (
            playerScores[0]
          )}
        </div>
      </div>
      <div className="container2 bg-red-50 flex justify-center items-center flex-col">
        <h1 className=" text-slate-500 playerText">PLAYER 2 </h1>
        {player2Active && (
          <div className="activePlayer2 absolute">
            <GoDotFill className=" text-green-600" />
          </div>
        )}
        <div className="score">
          {playerScores[1] === 100 ? (
            <span className="text-green-500">WINS</span>
          ) : (
            playerScores[1]
          )}
        </div>
      </div>

      <img
        src={diceImage}
        alt="diceImage"
        className={`diceImage absolute ${dropDice && "diceImageAnimation"}`}
      />

      <button className=" absolute rollDice" onClick={rollTheDice}>
        <MdFlipCameraAndroid className="  text-pink-400" />
      </button>
      <button
        onClick={resetDiceGame}
        className="absolute bg-white rounded-xl reset flex justify-center items-center"
      >
        <GrPowerReset className="" /> <span>RESET</span>
      </button>
    </div>
  );
};

export default Dice;
