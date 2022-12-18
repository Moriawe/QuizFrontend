import axios from "axios"
import { useState } from "react"

const InputForm = () => {
  const [category, setCategory] = useState("")
  const [question, setQuestion] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const url = process.env.QUIZ_POST_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(category, question)
    try {
      const response = await axios.post(url, {
        category: category,
        question: question,
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="page">
      <p>Make a new quiz</p>
      <form onSubmit={handleSubmit}>
        <div className="flexbox new-quiz-box">
          <div>
            <label>
              Category:
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Question:
              <input
                type="text"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Answer 1:
              <input
                type="text"
                id="answer1"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              />
              <label>Check if right answer</label>
              <input type="radio" name="right-question" />
            </label>
          </div>
          <div>
            <label>
              Answer 2:
              <input
                type="text"
                id="answer2"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
              />
              <label>Check if right answer</label>
              <input type="radio" name="right-question" />
            </label>
          </div>
          <div>
            <label>
              Answer 3:
              <input
                type="text"
                id="answer3"
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
              />
              <label>Check if right answer</label>
              <input type="radio" name="right-question" />
            </label>
          </div>
          <div>
            <label>
              Answer 4:
              <input
                type="text"
                id="answer4"
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
              />
              <label>Check if right answer</label>
              <input type="radio" name="right-question" />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default InputForm
