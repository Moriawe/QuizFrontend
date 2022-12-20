import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const AnswerButton = ({ answer }) => {
  const navigate = useNavigate()
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

  //const url = process.env.QUIZ_GET_URL
  const url = "https://enlitenwebapp.azurewebsites.net/api/QuizAnswer"

  const onBtnClicked = async () => {
    setIsQuestionAnswered(true)
    try {
      const response = await axios.post(url, {
        questionId: answer.questionId,
        answer: {
          id: answer.id,
          answerText: answer.answerText,
          isCorrectAnswer: answer.isCorrectAnswer,
          questionId: answer.questionId,
        },
      })
      if (response.data.wasAnswerCorrect) {
        navigate("/winner-page")
      } else {
        navigate("/loser-page")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div>
        <button
          disabled={isQuestionAnswered ? true : false}
          onClick={onBtnClicked}
        >
          {answer.answerText}
        </button>
      </div>
    </div>
  )
}

export default AnswerButton
