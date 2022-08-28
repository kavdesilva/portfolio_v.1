import './App.css';
import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {

  const homeRef = useRef()
  const aboutRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()
  const blogRef = useRef()

  const handleClickHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleClickPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleClickContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickBlog = () => {
    blogRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav handleClickHome={handleClickHome}
            handleClickAbout={handleClickAbout}
            handleClickPortfolio={handleClickPortfolio}
            handleClickContact={handleClickContact}
            handleClickBlog={handleClickBlog}/> 
      </header>
      <main>
        <Home homeRef={homeRef}/>
        <About aboutRef={aboutRef}/>
        <Portfolio portfolioRef={portfolioRef}/>
        <Blog blogRef={blogRef} />
        <Contact contactRef={contactRef}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
