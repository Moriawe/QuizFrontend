import { useNavigate } from "react-router-dom"

const Start = () => {
  const navigate = useNavigate()

  const onStartQuiz = () => {
    console.log("You pushed the button")
    navigate("/quizpage")
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

export default Start

/*
<div>
<QuizContainer quiz={quiz} />
</div>
*/
