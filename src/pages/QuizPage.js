import { useState } from "react"
import { Navigate } from "react-router-dom"
import QuizContainer from "../containers/QuizContainer"

const QuizPage = () => {
  return (
    <div className="page">
      <QuizContainer />
    </div>
  )
}

export default QuizPage
