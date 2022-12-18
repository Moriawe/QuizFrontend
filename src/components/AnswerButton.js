import { useState } from "react"

const AnswerButton = ({ answer }) => {
  const [btnClass, setBtnClass] = useState(null)
  const [answerMessage, setAnswerMessage] = useState("")

  const onBtnClicked = () => {
    if (answer.isCorrectAnswer) {
      setBtnClass("green")
      setAnswerMessage("Yes, that is correct!")
    } else {
      setBtnClass("red")
      setAnswerMessage("No, that is wrong!")
    }
  }

  return (
    <div className="container">
      <div>
        <button className={btnClass} onClick={onBtnClicked}>
          {answer.answerText}
        </button>
      </div>
      {answerMessage}
    </div>
  )
}

export default AnswerButton
