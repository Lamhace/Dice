import "./App.css";
import Dice from "./Dice/Dice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Instruction from "./InstructionPage/Instruction";

function App() {
  return (
    <Router>
      <div className=" flex justify-center items-center h-screen">
        <Routes>
          {/* <Dice /> */}
          <Route path="/dice" element={<Dice />} />
          <Route path="/" element={<Instruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
