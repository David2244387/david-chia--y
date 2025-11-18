import { useMemo, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Treatments from './pages/Treatments/Treatments'
import Gallery from './pages/Gallery/Gallery'
import treatmentRoomImage from './assets/חדר טיפולים.jpeg'
import './App.css'

const sections = [
  { id: 'home', label: 'דף הבית', Component: Home },
  { id: 'treatments', label: 'טיפולים', Component: Treatments },
  { id: 'gallery', label: 'גלריה', Component: Gallery },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const ActivePage = useMemo(
    () => sections.find(({ id }) => id === activeSection)?.Component ?? Home,
    [activeSection]
  )

  return (
    <div 
      className="app-shell" 
      style={{ '--treatment-room-bg': `url(${treatmentRoomImage})` }}
    >
      <Header sections={sections} activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="site-main">
        <ActivePage onNavigate={setActiveSection} />
      </main>
      <Footer />
    </div>
  )
}

export default App
