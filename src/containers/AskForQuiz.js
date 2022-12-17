import axios from "axios"
import { useState } from "react"
import QuizContainer from "./QuizContainer"

const AskForQuiz = () => {
  const [quiz, setQuiz] = useState({})

  const onStartQuiz = () => {
    const url = "https://enlitenwebapp.azurewebsites.net/api/quiz"
    //const url = "https://the-trivia-api.com/api/questions?limit=1"

    console.log("You pushed the button")

    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setQuiz(response.data[0])
        console.log(quiz)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container">
      <p>Do you think you're smart?</p>
      <button id="start-btn" onClick={onStartQuiz}>
        Start the Quiz
      </button>
    </div>
  )
}

export default AskForQuiz

/*
      {quiz && (
        <div>
          <QuizContainer quiz={quiz} />
        </div>
      )}
      */
