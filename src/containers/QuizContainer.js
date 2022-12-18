import axios from "axios"
import { useState, useEffect } from "react"
import AnswerButton from "../components/AnswerButton"

const QuizContainer = () => {
  const [quiz, setQuiz] = useState(null)

  const url = "https://enlitenwebapp.azurewebsites.net/api/quiz"

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setQuiz(response.data)
        console.log(quiz)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="container">
      {quiz && (
        <div>
          <p>{quiz.question}</p>
          {quiz.answers.map((answer) => (
            <AnswerButton key={answer.id} answer={answer} />
          ))}
        </div>
      )}
    </div>
  )
}

export default QuizContainer
