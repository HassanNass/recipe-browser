import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import RecipeDetails from './RecipeDetails.jsx'

function App() {

  return (
    <div className="container">
      <h1 className='header'>Recipe Browser</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
