import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Resume from './pages/Resume'

function App() {
  
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  )
}

export default App
