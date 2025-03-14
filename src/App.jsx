import styles from './App.module.css'
import About from './components/About/about'
import AiProjects from './components/AIProjects/projects'
import Contact from './components/Contact/contact'
import Experience from './components/Experience/experience'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import Projects from './components/projects/projects'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <AiProjects />
      <Contact />
    </div>
  )
}

export default App
