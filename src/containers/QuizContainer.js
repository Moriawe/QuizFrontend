import axios from "axios"
import AnswerButton from "../components/AnswerButton"

const QuizContainer = ({ quiz }) => {
  return (
    <div className="container">
      <p>{quiz.question}</p>
      {quiz.incorrectAnswers.map((answer) => (
        <AnswerButton answer={answer} />
      ))}
    </div>
  )
}

export default QuizContainer
