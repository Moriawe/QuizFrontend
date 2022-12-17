import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar flex-box">
      <Link to="/">
        <h1>Kristian och Jennies Quiz</h1>
      </Link>
      <div className="links">
        <Link to="/new-quiz">Make a new Question</Link>
      </div>
    </nav>
  )
}

export default Navbar
