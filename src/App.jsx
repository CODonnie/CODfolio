import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testdiv from './components/Testdiv'

const App = () => {
  return (
    <div>
    {/* Navbar */}
    <Navbar />
    {/* Body */}
    <Hero />
    {/* Footer */}
    <Testdiv />
    </div>
  )
}

export default App
