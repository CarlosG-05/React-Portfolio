import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

function App() {
  
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
