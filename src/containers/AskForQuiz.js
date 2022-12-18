import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AskForQuiz = () => {
  const [quiz, setQuiz] = useState({})
  const navigate = useNavigate()

  const fetchQuiz = async () => {
    //const url = "https://enlitenwebapp.azurewebsites.net/api/quiz"
    const url = "http://localhost:8000/quizzes"

    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setQuiz(response.data[0])
        console.log(quiz)
        navigate("/quizpage")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onStartQuiz = () => {
    console.log("You pushed the button")
    fetchQuiz()
  }

  return (
    <div className="container">
      <p>Do you want to play our Quizgame?</p>
      <button id="start-btn" onClick={onStartQuiz}>
        Give me a Question!
      </button>
    </div>
  )
}

export default AskForQuiz

/*
<div>
<QuizContainer quiz={quiz} />
</div>
*/
