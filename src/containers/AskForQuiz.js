const AskForQuiz = () => {
  function onPressGetQuiz() {
    console.log("You pushed the button")
  }

  return (
    <div className="container">
      <p>Do you think you're smart?</p>
      <button id="start-btn" onClick={onPressGetQuiz}>
        Start the Quiz
      </button>
    </div>
  )
}

export default AskForQuiz
