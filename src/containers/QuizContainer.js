import axios from "axios"
import { useState, useEffect } from "react"
import AnswerButton from "../components/AnswerButton"

const QuizContainer = () => {
  const [quiz, setQuiz] = useState(null)

  //const url = process.env.QUIZ_POST_URL
  const url = "https://enlitenwebapp.azurewebsites.net/api/Quiz"

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setQuiz(response.data)
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
