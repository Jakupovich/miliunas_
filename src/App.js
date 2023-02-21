import './App.css';
import React, { useEffect, useState } from 'react';
const currentIndex = Math.floor(Math.random() * 3)
function App() {
  const [currIndex, setCurrIndex] = useState(0)
  const [questions, setQuestion] = useState([
    {
      title: "In a website browser address bar, what does “www” stand for?",
      answers: ["Web Wide Web", "Web Random Random", "Random Answer for www", "Randm answer 2"],
      correctAnswer: "Web Wide Web"
    },
    {
      title: "In what year were the first Air Jordan sneakers released?",
      answers: [1984, 1992, 1975, 1986],
      correctAnswer: 1984
    },
    {
      title: "According to Greek mythology, who was the first woman on earth?",
      answers: ["Sefika", "Eva", "Pandora", "Fatima"],
      correctAnswer: "Pandora"
    },
  ])
  function checkQuestion(answer) {
    if (answer === questions[currIndex].correctAnswer) {
      setCurrIndex(currIndex + 1);

    } else {
      setCurrIndex(0)
    }
  }

  function defaultQuestion() {
    return questions[currIndex].answers.map((answer) => {
      return (
        <div key={answer} className="answers" onClick={() => checkQuestion(answer)}>
          {answer}
        </div>

      )
    })
  }
  return (
    <div className='App'>
      <img className='logo'></img>
      <h1 className='title'>{questions[currIndex].title}</h1>
      <div className='answerss  '>{defaultQuestion()}</div>
    </div>
  );
}
export default App;