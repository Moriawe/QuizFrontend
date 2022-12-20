import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./containers/Navbar"
import Home from "./pages/Home"
import QuizPage from "./pages/QuizPage"
import NewQuiz from "./pages/NewQuiz"
import WinnerPage from "./pages/WinnerPage"
import LoserPage from "./pages/LoserPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/new-quiz" element={<NewQuiz />} />
            <Route path="/winner-page" element={<WinnerPage />} />
            <Route path="/loser-page" element={<LoserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
