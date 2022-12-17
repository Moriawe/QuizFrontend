import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch"
import QuizBox from "../components/QuizBox"

const QuizList = ({ searchCode }) => {
  const { data, isPending, error } = useFetch(searchCode)
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    setQuizzes(data)
  }, [searchCode, data])

  return (
    <div className="quiz-list">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {quizzes &&
        quizzes.map((quiz) => <QuizBox key={quiz.imdbID} movie={quiz} />)}
    </div>
  )
}

export default QuizList
