import { useState } from "react"
import { Navigate } from "react-router-dom"
import QuizContainer from "../containers/QuizContainer"

const QuizPage = () => {
  const [isAnswered, setIsAnswered] = useState(false)

  if (isAnswered) {
    return <Navigate to="/" />
  }

  return (
    <div className="page">
      <QuizContainer />
    </div>
  )
}

export default QuizPage
