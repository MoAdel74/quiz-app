import { useState } from "react";
import { data } from "../../assets/data";
import Result from "../Result/ResultComponent.jsx";
import "./Quiz.css";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);
  const [clickable, setClickable] = useState(true);
  const [next, setNext] = useState(false);
  const [display, setDisplay] = useState("false");
  const [finalScore, setFinalScore] = useState(0);

  let nextQuestion = () => {
    setIndex(index + 1);
    setQuestions(data[index + 1]);
    if (index == data.length - 1) {
      setDisplay("true");
      setIndex(0);
      setQuestions(data[0]);
      let options = document.querySelectorAll("li");
      options.forEach((option) => {
        option.style.backgroundColor = "white";
        option.classList.remove("selected");
      });
      setClickable(true);
      setNext(false);
    }
    let options = document.querySelectorAll("li");
    options.forEach((option) => {
      option.style.backgroundColor = "white";
      option.classList.remove("selected");
    });
    setClickable(true);
    setNext(false);
  };
  let answerClicked = (option) => {
    if (option.target.innerText === questions.answer) {
      setFinalScore(finalScore + 1);
      option.target.style.backgroundColor = "rgb(169, 253, 157)";
    } else {
      option.target.style.backgroundColor = "rgba(222, 41, 41, 0.357)";
      let options = document.querySelectorAll("li");
      options.forEach((opt) => {
        if (opt.innerText === questions.answer) {
          opt.classList.add("selected");
        }
      });
    }
    setClickable(false);
    setNext(true);
  };
  return (
    <div className="page">
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>
          {index + 1}. {questions.question}
        </h2>
        <ul>
          <li
            onClick={answerClicked}
            style={{ pointerEvents: clickable ? "auto" : "none" }}
          >
            {questions.options[0]}
          </li>
          <li
            onClick={answerClicked}
            style={{ pointerEvents: clickable ? "auto" : "none" }}
          >
            {questions.options[1]}
          </li>
          <li
            onClick={answerClicked}
            style={{ pointerEvents: clickable ? "auto" : "none" }}
          >
            {questions.options[2]}
          </li>
          <li
            onClick={answerClicked}
            style={{ pointerEvents: clickable ? "auto" : "none" }}
          >
            {questions.options[3]}
          </li>
        </ul>
        <button
          onClick={nextQuestion}
          disabled={!next}
          className={next ? "" : "disabled"}
        >
          Next
        </button>
        <div className="index">
          {index + 1} Of {data.length} Questions
        </div>
        <Result score={finalScore} total={data.length} display={display} />
      </div>
    </div>
  );
};

export default Quiz;
