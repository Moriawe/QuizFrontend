import { useState } from "react"

const InputField = () => {
  const [playerName, setPlayerName] = useState("")
  const [category, setCategory] = useState("")
  const [limit, setLimit] = useState(1)
  const [difficulty, setDifficulty] = useState("")

  const categories = [
    "arts_and_literature",
    "film_and_tv",
    "food_and_drink",
    "general_knowledge",
    "geography",
    "history",
    "music",
    "science",
    "society_and_culture",
    "sport_and_leisure",
  ]

  const difficultyLevels = ["easy", "medium", "hard"]

  const numberOfQuestions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

  function handleSubmit(e) {
    e.preventDefault()
    console.log("You pushed the button")
  }

  return (
    <div className="input-field">
      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <div className="input-box">
            <label>Player:</label>
            <input
              type="text"
              required
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Category:</label>
            <select id={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="input-box">
            <label>Number of questions:</label>
            <select id={limit} onChange={(e) => setLimit(e.target.value)}>
              {numberOfQuestions.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <button id="start-btn">Start the Quiz</button>
        </div>
      </form>
    </div>
  )
}

export default InputField
