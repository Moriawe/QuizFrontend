const AnswerButton = ({ answer }) => {
  const onBtnClicked = () => {}

  return (
    <div>
      <button onClick={onBtnClicked}>{answer}</button>
    </div>
  )
}

export default AnswerButton
