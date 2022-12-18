import axios from "axios"
import AnswerButton from "../components/AnswerButton"

const QuizContainer = ({ quiz }) => {
  console.log(quiz.answers[0].answerText)

  return (
    <div className="container">
      <p>{quiz.question}</p>
      <p>{quiz.answers[0].answerText}</p>
    </div>
  )
}

export default QuizContainer

/*
      {quiz.answers.map((answer) => (
        <AnswerButton key={answer.id} answer={answer.answerText} />
      ))}
      */
